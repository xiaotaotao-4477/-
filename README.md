# Personal Homepage (Apple-like Minimal)

纯静态 `HTML/CSS/JS` 个人主页模板（现代极简、偏苹果风），支持 **中文 / English** 切换，可部署到 **GitHub Pages**。

## 本地预览

在项目根目录运行任意一种静态服务器即可（不要用 `file://` 直接双击打开）。

### 方式 A：Python（推荐，macOS 自带）

```bash
python3 -m http.server 5173
```

然后打开 `http://localhost:5173/`。

### 方式 B：Node（可选）

```bash
npx serve .
```

## 替换成你的内容（最常改的地方）

- **基础信息**：打开 `index.html`，把 `你的名字 / 城市 / 一句话介绍` 等内容替换掉\n+- **头像**：把头像放到 `assets/avatar.jpg`\n+- **项目**：在 `index.html` 的 `#projects` 区块里改项目卡片（标题、描述、链接）\n+- **简历**：用你真实的 PDF 覆盖根目录的 `resume.pdf`\n+- **图集**：把图片放到 `assets/gallery/1.jpg ...`，或按需增减按钮数量\n+- **博客**：在 `#blog` 区块把 `href` 改成你的文章链接\n+- **联系方式**：在 `#contact` 替换邮箱与社交链接\n+- **双语文案**：`scripts/i18n.js` 里维护字典（`zh` / `en`）\n+
## GitHub Pages 部署

1. 在 GitHub 新建仓库（例如 `homepage`）\n+2. 把本地代码推送到 `main` 分支\n+3. GitHub 仓库页面 → **Settings** → **Pages**\n+   - **Build and deployment** → **Source**：选择 **Deploy from a branch**\n+   - **Branch**：选择 `main` / `(root)`\n+4. 等待部署完成后，访问 GitHub 提示的 Pages 地址\n+
### 常见坑

- **资源路径**：本模板使用相对路径（`./styles/...`），适配 GitHub Pages\n+- **简历文件**：`resume.pdf` 现在是占位文本文件，记得用真实 PDF 覆盖\n+- **图集图片**：如果没有放 `assets/gallery/*.jpg`，点击会打开空图（正常）；把图片补上即可\n+
## 目录结构

```text
.
├─ index.html
├─ styles/
│  ├─ base.css
│  ├─ components.css
│  └─ sections.css
├─ scripts/
│  ├─ i18n.js
│  ├─ lightbox.js
│  └─ main.js
├─ assets/
│  ├─ avatar.jpg
│  └─ gallery/
└─ resume.pdf
```

