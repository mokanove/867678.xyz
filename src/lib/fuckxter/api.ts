/**
 * 数据层（UI 与后端之间的接缝）。
 *
 * UI 只通过本模块读写数据，不直接接触 mock，也不直接发请求。
 * 当前后端未就绪，所有函数用 mock + 模拟延迟实现，但维持分页/互动的真实语义；
 * 后端就绪后，只需把各函数内的实现替换为真正的请求，签名与返回类型不变。
 *
 * 约定的后端接口：
 *   GET  /api/fuckxter/timeline?tab=<foryou|following>&cursor=<cursor|null>
 *        -> FeedPage
 *   POST /api/fuckxter/posts            body: { text: string }
 *        -> Post
 *   POST /api/fuckxter/posts/:id/like   body: { liked: boolean }
 *        -> LikeResult
 *   POST /api/fuckxter/posts/:id/repost body: { reposted: boolean }
 *        -> RepostResult
 *   GET  /api/fuckxter/search?q=<query>
 *        -> SearchResult
 */

import { CURRENT_USER, timelineFor } from "./mock";
import type {
  FeedPage,
  FeedTab,
  FeedUser,
  LikeResult,
  Post,
  RepostResult,
  SearchResult,
} from "./types";

const PAGE_SIZE = 5;
const NETWORK_DELAY_MS = 350;

function delay<T>(value: T, ms = NETWORK_DELAY_MS): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

/** mock 持久层：会话内存活，模拟服务端的互动状态（点赞/转发） */
const interactions = new Map<string, { liked?: boolean; reposted?: boolean }>();
/** 会话内新发的帖子，merge 进所有时间线，模拟服务端落库 */
const createdPosts: Post[] = [];

/** 把会话内的互动状态合并进帖子，模拟服务端返回的最新状态 */
function withInteractions(post: Post): Post {
  const it = interactions.get(post.id);
  if (!it) return post;
  return {
    ...post,
    liked: it.liked,
    reposted: it.reposted,
    stats: {
      ...post.stats,
      likes: post.stats.likes + (it.liked ? 1 : 0),
      reposts: post.stats.reposts + (it.reposted ? 1 : 0),
    },
  };
}

function poolFor(tab: FeedTab): Post[] {
  const pool = timelineFor(tab).map(withInteractions);
  return [...createdPosts.map(withInteractions), ...pool];
}

export function getCurrentUser(): FeedUser {
  // TODO(后端): 会话/cookie 就绪后从服务端获取当前用户
  return CURRENT_USER;
}

export async function getTimeline(
  tab: FeedTab,
  cursor: string | null,
): Promise<FeedPage> {
  // TODO(后端): return fetch(`/api/fuckxter/timeline?tab=${tab}&cursor=${cursor ?? ""}`, { credentials: "include" }).then((r) => r.json())
  const start = cursor ? Number(cursor) : 0;
  const pool = poolFor(tab);
  const posts = pool.slice(start, start + PAGE_SIZE);
  const nextCursor =
    start + PAGE_SIZE < pool.length ? String(start + PAGE_SIZE) : null;
  return delay({ tab, posts, nextCursor });
}

export async function createPost(text: string): Promise<Post> {
  // TODO(后端): return fetch("/api/fuckxter/posts", { method: "POST", body: JSON.stringify({ text }), credentials: "include" }).then((r) => r.json())
  const post: Post = {
    id: `self-${Date.now()}`,
    author: CURRENT_USER,
    text,
    createdAt: new Date().toISOString(),
    stats: { replies: 0, reposts: 0, likes: 0 },
  };
  createdPosts.push(post);
  return delay(post);
}

export async function toggleLike(
  id: string,
  liked: boolean,
): Promise<LikeResult> {
  // TODO(后端): return fetch(`/api/fuckxter/posts/${id}/like`, { method: "POST", body: JSON.stringify({ liked }), credentials: "include" }).then((r) => r.json())
  interactions.set(id, { ...interactions.get(id), liked });
  const post = poolFor("foryou").find((p) => p.id === id);
  return delay({ id, liked, likes: post?.stats.likes ?? 0 });
}

export async function toggleRepost(
  id: string,
  reposted: boolean,
): Promise<RepostResult> {
  // TODO(后端): return fetch(`/api/fuckxter/posts/${id}/repost`, { method: "POST", body: JSON.stringify({ reposted }), credentials: "include" }).then((r) => r.json())
  interactions.set(id, { ...interactions.get(id), reposted });
  const post = poolFor("foryou").find((p) => p.id === id);
  return delay({ id, reposted, reposts: post?.stats.reposts ?? 0 });
}

export async function searchPosts(query: string): Promise<SearchResult> {
  // TODO(后端): return fetch(`/api/fuckxter/search?q=${encodeURIComponent(query)}`, { credentials: "include" }).then((r) => r.json())
  const q = query.toLowerCase();
  const posts = poolFor("foryou").filter(
    (p) =>
      p.text.toLowerCase().includes(q) ||
      p.author.name.toLowerCase().includes(q) ||
      p.author.handle.toLowerCase().includes(q),
  );
  return delay({ query, posts });
}
