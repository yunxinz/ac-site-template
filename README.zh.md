# Animal Crossing 个人网站模板

[English](README.md) | 中文

一个以《动物森友会》为主题的温馨个人网站，基于 **Astro**、**TailwindCSS** 和 **DaisyUI** 构建。拥有暖奶油色调、NookPhone 风格的侧边栏导航、明暗双主题，以及圆润可爱的整体风格。

## 特性

- 动森视觉风格 —— 温暖配色、圆润造型、3D 按压式按钮
- 白天（浅色）/ 夜晚（深色）双主题，localStorage 持久化
- NookPhone 风格图标侧边栏导航
- 随主题切换的横幅图片（明/暗两套）
- 博客、笔记、项目、简历、个人页
- 支持 Markdown/MDX 内容，内置 KaTeX 数学公式
- 附带 GitHub Pages 自动部署工作流
- 响应式设计 —— 移动端抽屉式侧边栏，桌面端常驻侧边栏

## 快速开始

### 环境要求

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/)

### 安装

```bash
# 克隆本仓库（或在 GitHub 上直接将其用作模板）
git clone https://github.com/yunxinz/ac-site-template.git
cd ac-site-template

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

在浏览器中打开 `http://localhost:4321`。

## 配置

### 1. 站点信息 —— `src/config.ts`

```ts
export const SITE_TITLE = "Your Name"; // 用于页眉、侧边栏、页面标题
export const AUTHOR_NAME = "Your Name"; // 用于页脚版权信息
export const AUTHOR_INITIAL = "YN"; // 用于页面标题前缀
export const SITE_DESCRIPTION = "Your Name's personal website.";
```

### 2. 社交链接 —— `src/components/SideBarFooter.astro`

更新 GitHub、LinkedIn、WhatsApp、Instagram 链接的 `href` 属性。

### 3. 联系邮箱 —— `src/components/SideBarMenu.astro`

更新 Contact 菜单项中的 `mailto:` 链接。

### 4. 头像 —— `public/profile.webp`

替换为你自己的照片，侧边栏会展示这张图片。

### 5. 横幅图片

每页顶部和底部使用随主题切换的横幅，需提供明暗两套：

- `public/header_banner_light.png` / `public/header_banner_dark.png` —— 顶部横幅
- `public/banner_light.png` / `public/banner_dark.png` —— 底部横幅

### 6. 侧边栏图标

侧边栏导航使用 `public/` 下的方形图标，可替换为你自己的，也可直接使用自带的一套：

| 页面   | 图标文件            |
| ------ | ------------------- |
| 首页   | `nookmiles.png`     |
| 项目   | `brush.png`         |
| 简历   | `nookwallet.png`    |
| 博客   | `photos.png`        |
| 个人   | `nookcritters.png`  |
| 笔记   | `drawing.png`       |
| 联系   | `messages.png`      |

主题切换按钮使用 `leaf_light.png` / `leaf_dark.png`。

## 内容

所有内容以 Markdown 或 MDX 文件形式存放在 `src/content/` 下。

### 博客文章 —— `src/content/blog/`

```md
---
title: "Your Post Title"
description: "A short description"
pubDate: "Apr 16 2026"
heroImage: "/your-image.webp"
tags: ["tag1", "tag2"]
---

正文内容……
```

### 笔记 —— `src/content/notes/`

格式与博客文章相同。支持 KaTeX 数学公式：

```md
$$
\int_0^\infty \frac{1}{x^2+1} \, dx = \frac{\pi}{2}
$$
```

以及代码块：

````md
```python
print("hello, world")
```
````

### 项目 —— `src/content/projects/`

```md
---
title: "Your Project"
description: "Project description"
pubDate: "Apr 16 2026"
heroImage: "/project-preview.webp"
badge: "tag"
github: "https://github.com/yourusername/repo"
liveUrl: "https://yourproject.com"
tags: [tag1, tag2]
---
```

### 页面

编辑以下 Astro 文件即可自定义页面内容：

| 页面 | 文件                          |
| ---- | ----------------------------- |
| 首页 | `src/pages/index.astro`       |
| 项目 | `src/pages/projects.astro`    |
| 简历 | `src/pages/cv.astro`          |
| 个人 | `src/pages/personal.astro`    |
| 博客 | `src/pages/blog/index.astro`  |
| 笔记 | `src/pages/notes/index.astro` |

## 主题

设计使用的 CSS 自定义属性定义在 `src/styles/global.css` 中，两套主题为：

| Token   | 白天（浅色） | 夜晚（深色） |
| ------- | ------------ | ------------ |
| 背景     | `#f7f3e7`    | `#374063`    |
| 文字     | `#877358`    | `#e2d6c8`    |
| 主色     | `#2abaaa`    | `#2abaaa`    |

DaisyUI 主题定义在 `tailwind.config.cjs` —— 编辑 `nord`（浅色）和 `night`（深色）主题对象即可。

## 字体

- **拉丁文本**：Nunito Variable（圆润、友好）
- **中日韩文本**：LXGW WenKai（霞鹜文楷）

字体通过 `src/styles/global.css` 中的 CSS `@font-face` 配合 `unicode-range` 组合使用。

## 部署（GitHub Pages）

仓库附带 GitHub Actions 工作流：`.github/workflows/deploy.yml`。

1. 将代码推送到 `main` 分支，工作流会自动构建并部署到 GitHub Pages
2. Base path 会根据仓库名自动推导，无需手动设置 `BASE_URL`
3. 将 `astro.config.mjs` 中的 `site` 更新为你的 GitHub Pages URL

如需自定义域名，在 `public/` 下添加 `CNAME` 文件并更新 `site` 字段。

## 致谢

- [Astro](https://astro.build/) —— 静态网站框架
- [TailwindCSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/) —— 样式
- 任天堂 [《动物森友会》](https://www.nintendo.com/us/store/products/animal-crossing-new-horizons-switch/) —— 视觉灵感
- [animal-crossing-ui](https://github.com/guokaigdg/animal-crossing-ui) —— 设计参考
- [okpng nookphone icons](https://okpng.gumroad.com/) —— 图标素材

## 许可证

MIT
