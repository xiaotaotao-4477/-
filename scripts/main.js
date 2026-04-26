function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function initTheme() {
  const storageKey = "homepage_theme";
  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  const saved = localStorage.getItem(storageKey);
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = saved === "light" || saved === "dark" ? saved : prefersDark ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", initial);

  btn.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(storageKey, next);
  });
}

function initScrollSpy() {
  const links = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  if (!links.length || !sections.length) return;

  const setCurrent = (id) => {
    for (const a of links) {
      const isCurrent = a.getAttribute("href") === `#${id}`;
      a.setAttribute("aria-current", isCurrent ? "true" : "false");
    }
  };

  const obs = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
      if (visible?.target?.id) setCurrent(visible.target.id);
    },
    { root: null, threshold: [0.15, 0.22, 0.32, 0.44, 0.55], rootMargin: "-20% 0px -70% 0px" }
  );

  sections.forEach((s) => obs.observe(s));
}

function initSmoothAnchors() {
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href") || "";
      const id = href.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      history.pushState(null, "", href);
    });
  });
}

function initCopyEmail() {
  const btn = document.getElementById("copyEmailBtn");
  const hint = document.getElementById("copyEmailHint");
  const emailLink = document.getElementById("emailLink");
  if (!btn || !hint || !emailLink) return;

  btn.addEventListener("click", async () => {
    const email = (emailLink.textContent || "").trim();
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      hint.textContent = (window.__i18n?.lang === "zh") ? "已复制" : "Copied";
    } catch {
      hint.textContent = (window.__i18n?.lang === "zh") ? "复制失败（浏览器限制）" : "Copy failed";
    }
    window.setTimeout(() => (hint.textContent = ""), 1400);
  });
}

function initLangButtonStyle() {
  // Use chip style + active state. This keeps CSS simple and avoids needing extra selectors.
  document.querySelectorAll(".lang-switch [data-lang]").forEach((btn) => {
    btn.classList.add("chip");
  });
}

function initMobileNav() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove("is-active");
    toggle.setAttribute("aria-expanded", "false");
    toggle.querySelector(".icon").textContent = "☰";
  };

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isActive = nav.classList.toggle("is-active");
    toggle.setAttribute("aria-expanded", isActive ? "true" : "false");
    toggle.querySelector(".icon").textContent = isActive ? "×" : "☰";
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (nav.classList.contains("is-active") && !nav.contains(e.target) && e.target !== toggle) {
      closeMenu();
    }
  });

  // Close when clicking a link
  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

  // Close on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLangButtonStyle();
  initScrollSpy();
  initSmoothAnchors();
  initCopyEmail();
  initMobileNav();
});

