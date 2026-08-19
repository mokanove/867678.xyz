let observer: IntersectionObserver | undefined;

const initTables = (): void => {
  observer?.disconnect();
  const links = Array.from(
    document.querySelectorAll<HTMLAnchorElement>(".toc-item a"),
  );
  if (!links.length) return;

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach((link) =>
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`,
            ),
          );
        }
      }
    },
    { rootMargin: "-80px 0px -70% 0px" },
  );

  links.forEach((link) => {
    const target = document.getElementById(
      link.getAttribute("href")?.slice(1) ?? "",
    );
    if (target) observer?.observe(target);
  });
};

document.addEventListener("astro:page-load", initTables);
