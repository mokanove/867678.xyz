const sidebar = document.querySelector<HTMLElement>(".sidebar");
  const trigger = document.querySelector<HTMLButtonElement>(".nav-trigger");
  const closeButtons =
    document.querySelectorAll<HTMLElement>("[data-nav-close]");
  const themeToggle = document.querySelector<HTMLButtonElement>(
    "[data-theme-toggle]",
  );

  const isNavActive = (href: string, pathname: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  const syncActive = () => {
    const pathname = location.pathname;
    sidebar?.querySelectorAll<HTMLAnchorElement>("a.nav-item").forEach((link) => {
      const href = link.getAttribute("href") ?? "";
      const active = isNavActive(href, pathname);
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  };

  const setOpen = (open: boolean) => {
    document.documentElement.classList.toggle("nav-open", open);
    trigger?.setAttribute("aria-expanded", String(open));
    if (open) sidebar?.querySelector<HTMLElement>("a, button")?.focus();
    else trigger?.focus();
  };

  trigger?.addEventListener("click", () => setOpen(true));
  closeButtons.forEach((button) =>
    button.addEventListener("click", () => setOpen(false)),
  );
  sidebar?.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      if (matchMedia("(max-width: 640px)").matches) setOpen(false);
    }),
  );
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      document.documentElement.classList.contains("nav-open")
    ) {
      setOpen(false);
    }
  });

  const themeModes = ["auto", "light", "dark"] as const;
  themeToggle?.addEventListener("click", () => {
    const current = (document.documentElement.dataset.themeMode ??
      "auto") as (typeof themeModes)[number];
    const next =
      themeModes[(themeModes.indexOf(current) + 1) % themeModes.length];
    document.documentElement.dataset.themeMode = next;
    localStorage.setItem("theme", next);
    const dark =
      next === "dark" ||
      (next === "auto" && matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  });

  document.addEventListener("astro:page-load", syncActive);