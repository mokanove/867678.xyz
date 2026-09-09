/**
 * FuckXter 前端控制器：负责渲染信息流与交互，所有数据经由 ./api 读写。
 */
import {
  createPost,
  getCurrentUser,
  getTimeline,
  searchPosts,
  toggleLike,
  toggleRepost,
} from "./api";
import type { FeedTab, Post, SearchResult } from "./types";

const MAX_CHARS = 280;

const ICONS = {
  reply:
    '<svg class="fk-action-icon" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>',
  repost:
    '<svg class="fk-action-icon" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 1l4 4-4 4"></path><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><path d="M7 23l-4-4 4-4"></path><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>',
  heart:
    '<svg class="fk-action-icon" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
  share:
    '<svg class="fk-action-icon" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M16 6l-4-4-4 4"></path><path d="M12 2v13"></path></svg>',
  verified:
    '<svg class="fk-verified" viewBox="0 0 24 24" aria-label="认证账号" role="img"><path fill="currentColor" d="M12 1.5l2.6 2 3.2-.4 1.2 3 3 1.2-.4 3.2 2 2.5-2 2.5.4 3.2-3 1.2-1.2 3-3.2-.4-2.6 2-2.6-2-3.2.4-1.2-3-3-1.2.4-3.2-2-2.5 2-2.5-.4-3.2 3-1.2 1.2-3 3.2.4z"></path><path class="fk-verified-check" d="M10.7 15.9l-3-3 1.3-1.3 1.7 1.7 4.3-4.3 1.3 1.3z"></path></svg>',
};

const AVATAR_GRADIENTS: [string, string][] = [
  ["#f97316", "#ef4444"],
  ["#8b5cf6", "#6366f1"],
  ["#06b6d4", "#3b82f6"],
  ["#10b981", "#14b8a6"],
  ["#f43f5e", "#ec4899"],
  ["#f59e0b", "#d97706"],
];

function avatarGradient(handle: string): string {
  const hash = [...handle].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const [from, to] = AVATAR_GRADIENTS[hash % AVATAR_GRADIENTS.length];
  return `background-image: linear-gradient(135deg, ${from}, ${to})`;
}

function relativeTime(iso: string): string {
  const diffSeconds = Math.max(0, (Date.now() - Date.parse(iso)) / 1000);
  if (diffSeconds < 60) return "刚刚";
  if (diffSeconds < 3600) return `${Math.floor(diffSeconds / 60)}分钟前`;
  if (diffSeconds < 86_400) return `${Math.floor(diffSeconds / 3600)}小时前`;
  if (diffSeconds < 86_400 * 7)
    return `${Math.floor(diffSeconds / 86_400)}天前`;
  return new Date(iso).toLocaleDateString("zh-CN", {
    month: "numeric",
    day: "numeric",
  });
}

function fmtCount(n: number): string {
  if (n < 10_000) return String(n);
  const wan = n / 10_000;
  return `${wan >= 10 ? Math.round(wan) : Math.round(wan * 10) / 10}万`;
}

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className?: string,
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (className) node.className = className;
  return node;
}

function actionButton(
  action: string,
  icon: string,
  label: string,
  count: number,
): HTMLButtonElement {
  const btn = el("button", "fk-action");
  btn.type = "button";
  btn.dataset.action = action;
  btn.dataset.count = String(count);
  btn.setAttribute("aria-label", label);
  btn.title = label;
  btn.innerHTML = `${icon}<span class="fk-action-count"></span>`;
  btn.querySelector(".fk-action-count")!.textContent =
    count > 0 ? fmtCount(count) : "";
  return btn;
}

function renderPost(post: Post): HTMLElement {
  const article = el("article", "fk-post");
  article.dataset.postId = post.id;
  article.dataset.handle = post.author.handle;

  const avatar = el("div", "fk-avatar");
  avatar.setAttribute("style", avatarGradient(post.author.handle));
  avatar.textContent = [...post.author.name][0] ?? "?";
  avatar.title = `@${post.author.handle}`;

  const body = el("div", "fk-post-body");

  const head = el("header", "fk-post-head");
  const name = el("span", "fk-post-name");
  name.textContent = post.author.name;
  head.append(name);
  if (post.author.verified) {
    head.insertAdjacentHTML("beforeend", ICONS.verified);
  }
  const meta = el("span", "fk-post-meta");
  meta.textContent = `@${post.author.handle} · ${relativeTime(post.createdAt)}`;
  head.append(meta);

  const text = el("p", "fk-post-text");
  text.textContent = post.text;

  body.append(head, text);

  if (post.media) {
    const media = el("div", "fk-media");
    media.setAttribute(
      "style",
      `background-image: linear-gradient(135deg, ${post.media.gradient[0]}, ${post.media.gradient[1]})`,
    );
    media.setAttribute("role", "img");
    media.setAttribute("aria-label", post.media.alt);
    media.textContent = post.media.emoji;
    body.append(media);
  }

  const actions = el("footer", "fk-actions");
  actions.append(
    actionButton("reply", ICONS.reply, "回复", post.stats.replies),
    actionButton("repost", ICONS.repost, "转发", post.stats.reposts),
    actionButton("like", ICONS.heart, "喜欢", post.stats.likes),
    actionButton("share", ICONS.share, "分享", 0),
  );
  if (post.reposted) actions.children[1].classList.add("is-reposted");
  if (post.liked) actions.children[2].classList.add("is-liked");

  body.append(actions);
  article.append(avatar, body);
  return article;
}

function statusRow(message: string): HTMLElement {
  const row = el("div", "fk-status");
  row.textContent = message;
  return row;
}

function searchHead(result: SearchResult, exit: () => void): HTMLElement {
  const head = el("div", "fk-search-head");
  const label = el("span");
  const strong = el("strong");
  strong.textContent = `“${result.query}”`;
  label.append(
    document.createTextNode(
      `搜索 ${strong.textContent} · ${result.posts.length} 条结果`,
    ),
  );
  const exitBtn = el("button", "fk-search-exit");
  exitBtn.type = "button";
  exitBtn.textContent = "返回推荐流";
  exitBtn.addEventListener("click", exit);
  head.append(label, exitBtn);
  return head;
}

interface FeedState {
  tab: FeedTab;
  cursor: string | null;
  done: boolean;
  loading: boolean;
  seq: number;
  search: string | null;
}

function mountFuckxter(container: HTMLElement): void {
  if (container.dataset.fkMounted) return;
  container.dataset.fkMounted = "true";

  const scroller = container.querySelector<HTMLElement>(".fk-main")!;
  const feed = container.querySelector<HTMLElement>(".fk-feed")!;
  const sentinel = container.querySelector<HTMLElement>(".fk-sentinel")!;
  const spinner = sentinel.querySelector<HTMLElement>(".fk-spinner")!;
  const tabs = [...container.querySelectorAll<HTMLButtonElement>(".fk-tab")];
  const composer = container.querySelector<HTMLElement>(".fk-composer")!;
  const composerInput =
    container.querySelector<HTMLTextAreaElement>(".fk-composer-input")!;
  const composerBtn =
    container.querySelector<HTMLButtonElement>(".fk-post-btn")!;
  const charCount = container.querySelector<HTMLElement>(".fk-char-count")!;
  const searchInput =
    container.querySelector<HTMLInputElement>(".fk-search-input")!;

  const me = getCurrentUser();
  const composerAvatar = container.querySelector<HTMLElement>(
    ".fk-composer .fk-avatar",
  )!;
  composerAvatar.setAttribute("style", avatarGradient(me.handle));
  composerAvatar.textContent = [...me.name][0] ?? "?";
  composerAvatar.title = `@${me.handle}`;

  const state: FeedState = {
    tab: "foryou",
    cursor: null,
    done: false,
    loading: false,
    seq: 0,
    search: null,
  };

  const setSentinelBusy = (busy: boolean) => {
    sentinel.classList.toggle("is-done", state.done && !busy);
    spinner.style.visibility = busy ? "visible" : "hidden";
  };

  const renderError = (retry: () => void) => {
    feed.querySelectorAll(".fk-status").forEach((n) => n.remove());
    const row = el("div", "fk-status");
    row.append(
      document.createTextNode("加载失败了。"),
      Object.assign(el("button", "fk-retry-btn"), {
        type: "button",
        textContent: "重试",
      }),
    );
    row.querySelector("button")!.addEventListener("click", retry);
    feed.append(row);
  };

  const loadPage = async (replace: boolean) => {
    if (state.loading || state.search !== null) return;
    if (state.done && !replace) return;
    const seq = ++state.seq;
    state.loading = true;
    setSentinelBusy(true);
    try {
      const page = await getTimeline(state.tab, replace ? null : state.cursor);
      if (seq !== state.seq) return; // 用户已切换视图，丢弃过期响应
      if (replace) feed.replaceChildren();
      for (const post of page.posts) feed.append(renderPost(post));
      state.cursor = page.nextCursor;
      state.done = page.nextCursor === null;
      if (state.done) feed.append(statusRow("你已看完全部内容 🎉"));
    } catch {
      if (seq === state.seq) renderError(() => loadPage(replace));
    } finally {
      if (seq === state.seq) {
        state.loading = false;
        setSentinelBusy(false);
      }
    }
  };

  // ---------- 搜索 ----------
  const exitSearch = () => {
    state.search = null;
    state.done = false;
    state.cursor = null;
    composer.hidden = false;
    searchInput.value = "";
    loadPage(true);
  };

  const doSearch = async (rawQuery: string) => {
    const query = rawQuery.trim();
    if (!query) {
      if (state.search !== null) exitSearch();
      return;
    }
    const seq = ++state.seq;
    state.search = query;
    state.done = true; // 搜索结果不分页
    state.loading = true;
    composer.hidden = true;
    setSentinelBusy(true);
    try {
      const result = await searchPosts(query);
      if (seq !== state.seq) return;
      feed.replaceChildren();
      feed.append(searchHead(result, exitSearch));
      if (result.posts.length === 0) feed.append(statusRow("没有找到相关内容"));
      for (const post of result.posts) feed.append(renderPost(post));
    } catch {
      if (seq === state.seq) renderError(() => doSearch(query));
    } finally {
      if (seq === state.seq) {
        state.loading = false;
        setSentinelBusy(false);
      }
    }
  };

  searchInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    doSearch(searchInput.value);
  });

  // ---------- 页签切换 ----------
  for (const tab of tabs) {
    tab.addEventListener("click", () => {
      const next = tab.dataset.tab as FeedTab | undefined;
      if (!next) return;
      if (state.search === null && next === state.tab) return;
      if (state.search !== null) {
        state.search = null;
        composer.hidden = false;
        searchInput.value = "";
      }
      state.tab = next;
      state.cursor = null;
      state.done = false;
      for (const t of tabs) t.classList.toggle("is-active", t === tab);
      loadPage(true);
    });
  }

  // ---------- 无限滚动 ----------
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) loadPage(false);
    },
    { root: scroller, rootMargin: "360px" },
  );
  observer.observe(sentinel);

  // ---------- 帖子操作（事件委托） ----------
  const flashCount = (btn: HTMLElement) => {
    const counter = btn.querySelector<HTMLElement>(".fk-action-count");
    if (!counter) return;
    counter.classList.remove("is-flash");
    void counter.offsetWidth; // 重启动画
    counter.classList.add("is-flash");
  };

  const setCount = (btn: HTMLElement, n: number) => {
    btn.querySelector<HTMLElement>(".fk-action-count")!.textContent =
      n > 0 ? fmtCount(n) : "";
  };

  feed.addEventListener("click", async (event) => {
    const btn = (event.target as HTMLElement).closest<HTMLButtonElement>(
      ".fk-action",
    );
    if (!btn) return;
    const article = btn.closest<HTMLElement>(".fk-post");
    const id = article?.dataset.postId;
    if (!id) return;
    const action = btn.dataset.action;

    if (action === "like" || action === "repost") {
      const active = action === "like" ? "is-liked" : "is-reposted";
      const willActive = !btn.classList.contains(active);
      btn.classList.toggle(active, willActive);
      flashCount(btn);
      const countOf = (n: number, on: boolean) =>
        Math.max(0, n + (on ? 1 : -1));
      const current = Number(btn.dataset.count ?? "0");
      const optimistic = countOf(current, willActive);
      btn.dataset.count = String(optimistic);
      setCount(btn, optimistic);
      try {
        let serverCount: number;
        let serverActive: boolean;
        if (action === "like") {
          const result = await toggleLike(id, willActive);
          serverCount = result.likes;
          serverActive = result.liked;
        } else {
          const result = await toggleRepost(id, willActive);
          serverCount = result.reposts;
          serverActive = result.reposted;
        }
        btn.dataset.count = String(serverCount);
        setCount(btn, serverCount);
        btn.classList.toggle(active, serverActive);
      } catch {
        // 乐观更新失败则回滚
        btn.classList.toggle(active, !willActive);
        btn.dataset.count = String(current);
        setCount(btn, current);
      }
      return;
    }

    if (action === "reply") {
      composer.hidden = false;
      composerInput.value = `@${article.dataset.handle ?? ""} `;
      composerInput.focus();
      composerInput.setSelectionRange(
        composerInput.value.length,
        composerInput.value.length,
      );
      composerInput.scrollIntoView({ behavior: "smooth", block: "center" });
      syncComposer();
      return;
    }

    if (action === "share") {
      const url = `${location.origin}/fuckxter?post=${id}`;
      try {
        await navigator.clipboard.writeText(url);
        btn.title = "已复制链接";
        setTimeout(() => {
          btn.title = "分享";
        }, 1200);
      } catch {
        /* 剪贴板不可用时静默忽略 */
      }
    }
  });

  // ---------- 发帖框 ----------
  const syncComposer = () => {
    const len = [...composerInput.value].length;
    charCount.textContent = `${len} / ${MAX_CHARS}`;
    charCount.classList.toggle("is-over", len > MAX_CHARS);
    composerBtn.disabled = len === 0 || len > MAX_CHARS;
  };
  composerInput.addEventListener("input", syncComposer);
  syncComposer();

  composerBtn.addEventListener("click", async () => {
    const text = composerInput.value.trim();
    if (!text) return;
    composerBtn.disabled = true;
    const label = composerBtn.textContent;
    composerBtn.textContent = "发送中…";
    try {
      const post = await createPost(text);
      if (state.search !== null) {
        searchInput.value = "";
        state.search = null;
        composer.hidden = false;
      }
      feed
        .querySelectorAll(".fk-status, .fk-search-head")
        .forEach((n) => n.remove());
      feed.prepend(renderPost(post));
      state.cursor = null;
      state.done = false;
      composerInput.value = "";
      syncComposer();
      scroller.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      composerBtn.textContent = "发送失败";
      setTimeout(() => {
        composerBtn.textContent = label;
        syncComposer();
      }, 1200);
      return;
    }
    composerBtn.textContent = label;
  });

  // ---------- 设置菜单（主题切换） ----------
  const settingsWrap = container.querySelector<HTMLElement>(".fk-settings")!;
  const settingsBtn = settingsWrap.querySelector<HTMLButtonElement>(
    "[data-role=settings-btn]",
  )!;
  const settingsMenu = settingsWrap.querySelector<HTMLElement>(
    "[data-role=settings-menu]",
  )!;

  const applyThemeChoice = (mode: string) => {
    localStorage.setItem("theme", mode);
    const dark =
      mode === "dark" ||
      (mode === "auto" && matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.dataset.themeMode = mode;
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  };

  const syncThemeMenu = () => {
    const current = localStorage.getItem("theme") ?? "auto";
    for (const item of settingsMenu.querySelectorAll<HTMLButtonElement>(
      "[data-theme-choice]",
    )) {
      item.setAttribute(
        "aria-checked",
        item.dataset.themeChoice === current ? "true" : "false",
      );
    }
  };

  const closeMenu = () => {
    settingsMenu.hidden = true;
    settingsBtn.setAttribute("aria-expanded", "false");
    document.removeEventListener("click", onDocClick, true);
    document.removeEventListener("keydown", onKeydown, true);
  };
  const onDocClick = (event: MouseEvent) => {
    if (!settingsWrap.contains(event.target as Node)) closeMenu();
  };
  const onKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape") closeMenu();
  };

  settingsBtn.addEventListener("click", () => {
    if (settingsMenu.hidden) {
      syncThemeMenu();
      settingsMenu.hidden = false;
      settingsBtn.setAttribute("aria-expanded", "true");
      document.addEventListener("click", onDocClick, true);
      document.addEventListener("keydown", onKeydown, true);
    } else {
      closeMenu();
    }
  });

  settingsMenu.addEventListener("click", (event) => {
    const item = (event.target as HTMLElement).closest<HTMLButtonElement>(
      "[data-theme-choice]",
    );
    if (!item) return;
    applyThemeChoice(item.dataset.themeChoice!);
    syncThemeMenu();
    closeMenu();
  });

  loadPage(true);
}

export function mountFuckxterBySelector(selector: string): void {
  const container = document.querySelector<HTMLElement>(selector);
  if (container) mountFuckxter(container);
}
