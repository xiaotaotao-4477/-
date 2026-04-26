const I18N_STORAGE_KEY = "homepage_lang";

const dict = {
  zh: {
    "meta.title": "个人主页",
    "meta.description": "现代极简的个人主页（苹果风）",
    "a11y.skipToContent": "跳到正文",
    "brand.name": "你的名字",
    "nav.about": "关于",
    "nav.projects": "项目",
    "nav.resume": "简历",
    "nav.gallery": "图集",
    "nav.blog": "博客",
    "nav.contact": "联系",

    "hero.eyebrow": "你好，我是",
    "hero.name": "陈卓雅",
    "hero.nameEn": "Zoey Chen",
    "hero.subtitle": "我是一名视觉设计师，擅长三维设计、动效设计、画册设计",
    "hero.ctaResume": "下载简历",
    "hero.ctaContact": "联系我",
    "hero.meta.location": "📍 城市",
    "hero.meta.focus": "专注：前端 / 设计 / 产品",
    "hero.roleTag": "开发 · 设计",
    "hero.statusTag": "开放机会",

    "about.title": "关于我",
    "about.desc": "用 2–3 句话说明你的方向与价值。",
    "about.b1": "偏好极简与细节，重视一致性与可用性。",
    "about.b2": "能把需求落成清晰的方案与高质量交付。",
    "about.b3": "关注性能、无障碍与体验的“最后 10%”。",
    "about.skillsTitle": "技能",

    "projects.title": "作品 / 项目",
    "projects.desc": "挑选 3–6 个最能代表你的项目。",
    "projects.view": "查看",
    "projects.code": "源码",
    "projects.p1.desc": "一句话描述：解决了什么问题，有什么亮点。",
    "projects.p2.desc": "一句话描述：技术栈、你负责的部分、成果。",
    "projects.p3.desc": "一句话描述：用数据说话（性能提升/转化/效率）。",

    "resume.title": "简历",
    "resume.desc": "用时间线展示关键经历与代表成果。",
    "resume.t1.title": "公司 / 学校 · 角色",
    "resume.t1.time": "2025 — 现在",
    "resume.t1.desc": "1–2 句描述：你负责什么，带来什么变化。",
    "resume.t2.title": "公司 / 学校 · 角色",
    "resume.t2.time": "2023 — 2025",
    "resume.t2.desc": "用“成果 + 指标”写法更有说服力。",
    "resume.downloadTitle": "下载",
    "resume.downloadDesc": "把你的 PDF 简历放在项目根目录的 `resume.pdf`。",
    "resume.downloadBtn": "下载 PDF",

    "gallery.title": "图集",
    "gallery.desc": "放一些你喜欢的作品、截图、照片或灵感。",

    "blog.title": "博客",
    "blog.desc": "先用外链接入，后续再升级为独立博客也很方便。",
    "blog.b1.title": "文章标题示例",
    "blog.b1.meta": "2026 · 3 分钟",
    "blog.b1.desc": "一句话摘要：写了什么、解决了什么。",
    "blog.b2.title": "文章标题示例",
    "blog.b2.meta": "2025 · 5 分钟",
    "blog.b2.desc": "用“主题 + 收获”写摘要最清晰。",
    "blog.more": "查看更多",
    "blog.platform": "Notion / Medium / 掘金",
    "blog.moreDesc": "把这里链接到你的博客主页或文章列表。",

    "contact.title": "联系",
    "contact.desc": "欢迎交流合作、项目机会或一起做点有趣的事。",
    "contact.emailTitle": "邮箱",
    "contact.copyEmail": "复制邮箱",
    "contact.githubDesc": "项目与代码。",
    "contact.linkedinDesc": "职业经历与联系。",

    "footer.note": "用纯静态页面制作 · GitHub Pages 部署",
    "footer.backTop": "回到顶部",
  },
  en: {
    "meta.title": "Homepage",
    "meta.description": "A modern, minimal Apple-like personal homepage",
    "a11y.skipToContent": "Skip to content",
    "brand.name": "Your Name",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.resume": "Resume",
    "nav.gallery": "Gallery",
    "nav.blog": "Blog",
    "nav.contact": "Contact",

    "hero.eyebrow": "Hi, I'm",
    "hero.name": "Zhuoya Chen",
    "hero.nameEn": "Zoey Chen",
    "hero.subtitle": "I'm a Visual Designer, specialized in 3D, motion, and layout design.",
    "hero.ctaResume": "Download resume",
    "hero.ctaContact": "Contact me",
    "hero.meta.location": "📍 City",
    "hero.meta.focus": "Focus: Frontend / Design / Product",
    "hero.roleTag": "Developer · Designer",
    "hero.statusTag": "Open to work",

    "about.title": "About",
    "about.desc": "Describe your direction and value in 2–3 sentences.",
    "about.b1": "Minimal by default, obsessed with details and usability.",
    "about.b2": "Turn ambiguous requirements into clear, high-quality delivery.",
    "about.b3": "Care about performance, accessibility, and the last 10% of polish.",
    "about.skillsTitle": "Skills",

    "projects.title": "Projects",
    "projects.desc": "Pick 3–6 projects that represent you best.",
    "projects.view": "View",
    "projects.code": "Code",
    "projects.p1.desc": "One-liner: problem, solution, and what makes it special.",
    "projects.p2.desc": "One-liner: stack, your role, and impact.",
    "projects.p3.desc": "One-liner: use numbers (perf, conversion, efficiency).",

    "resume.title": "Resume",
    "resume.desc": "A short timeline of key experiences and outcomes.",
    "resume.t1.title": "Company / School · Role",
    "resume.t1.time": "2025 — Present",
    "resume.t1.desc": "1–2 lines: what you owned and what changed.",
    "resume.t2.title": "Company / School · Role",
    "resume.t2.time": "2023 — 2025",
    "resume.t2.desc": "Write in “outcome + metric” format whenever possible.",
    "resume.downloadTitle": "Download",
    "resume.downloadDesc": "Put your PDF at the repo root as `resume.pdf`.",
    "resume.downloadBtn": "Download PDF",

    "gallery.title": "Gallery",
    "gallery.desc": "Add work snapshots, photos, or inspiration.",

    "blog.title": "Blog",
    "blog.desc": "Start with external links and upgrade later when you want.",
    "blog.b1.title": "Sample post title",
    "blog.b1.meta": "2026 · 3 min",
    "blog.b1.desc": "One-line summary: what you wrote and why it matters.",
    "blog.b2.title": "Sample post title",
    "blog.b2.meta": "2025 · 5 min",
    "blog.b2.desc": "Summaries work best as “topic + takeaway”.",
    "blog.more": "See more",
    "blog.platform": "Notion / Medium / Juejin",
    "blog.moreDesc": "Link this to your blog homepage or archive.",

    "contact.title": "Contact",
    "contact.desc": "Open to collaborations, opportunities, or fun ideas.",
    "contact.emailTitle": "Email",
    "contact.copyEmail": "Copy email",
    "contact.githubDesc": "Projects and code.",
    "contact.linkedinDesc": "Experience and networking.",

    "footer.note": "Built with static files · Deployed on GitHub Pages",
    "footer.backTop": "Back to top",
  },
};

function resolveInitialLang() {
  const saved = localStorage.getItem(I18N_STORAGE_KEY);
  if (saved === "zh" || saved === "en") return saved;
  const nav = (navigator.language || "").toLowerCase();
  return nav.startsWith("zh") ? "zh" : "en";
}

function setActiveLangButtons(lang) {
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("primary", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
}

function applyI18n(lang) {
  const d = dict[lang] || dict.en;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const value = d[key];
    if (typeof value !== "string") return;
    el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const raw = el.getAttribute("data-i18n-attr") || "";
    const parts = raw.split(",").map((s) => s.trim()).filter(Boolean);
    for (const p of parts) {
      const [attr, key] = p.split(":").map((s) => s.trim());
      if (!attr || !key) continue;
      const value = d[key];
      if (typeof value !== "string") continue;
      el.setAttribute(attr, value);
    }
  });

  document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
  localStorage.setItem(I18N_STORAGE_KEY, lang);
  setActiveLangButtons(lang);
  window.__i18n.lang = lang;
}

window.__i18n = {
  dict,
  lang: "en",
  applyI18n,
  resolveInitialLang,
};

document.addEventListener("DOMContentLoaded", () => {
  const lang = resolveInitialLang();
  applyI18n(lang);

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.getAttribute("data-lang");
      if (next === "zh" || next === "en") applyI18n(next);
    });
  });
});
