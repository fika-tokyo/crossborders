# CROSSBORDERS — 公司官网

「跨越边界，创造价值 / Cross the Borders, Create the Value.」
基于 `CrossBorders_Content_Planning_CN.docx` 内容，参考 Daylight 风格设计。
技术栈：**React + Vite + Tailwind CSS v4 + React Router**。

## 运行

```bash
npm install
npm run dev      # 开发服务器，默认 http://localhost:5173
npm run build    # 生产构建，输出到 dist/
npm run preview  # 本地预览生产构建
```

## 如何修改

- **所有文字**集中在 [`src/content.js`](src/content.js) —— 品牌哲学、五道边界、集团介绍、价值链、差别化矩阵、核心强项、合作类型等全部文案都在这里。
- **配色 / 字体**集中在 [`src/index.css`](src/index.css) 顶部的 `@theme` 区块（navy `#0b1f33` / teal `#19c2b3` / 中性灰）。
- **页面**在 `src/pages/`，**导航与页脚**在 `src/components/`。

## 页面结构

| 路径 | 页面 | 内容 |
| --- | --- | --- |
| `/` | 首页 | Hero · 存在意义 · 五道边界 · 价值链概览 · CTA |
| `/about` | 关于我们 | 品牌哲学 · 五道边界 · FIKA / UNPLAN 底蕴 · 集团定位 |
| `/value` | 价值创造 | 五阶段价值链 · 差别化矩阵 · 四大核心强项 |
| `/partnership` | 合作 | 合作哲学 · 三种合作可能 |
| `/contact` | 联系咨询 | 带校验的询问表单 |
| `/thank-you` | 提交成功页 | 表单提交后自动跳转 |

## 询问表单 → 下一页

`/contact` 的表单经前端校验后，通过 React Router 跳转到 `/thank-you`，并把姓名带过去。
目前未接后端 —— 在 [`src/pages/Contact.jsx`](src/pages/Contact.jsx) 的 `handleSubmit` 中
标有 `TODO` 处接入你的邮件服务 / 后端 API 即可。

## 待补充（TODO）

- `src/content.js` 中 `site.email` / `site.phone` 为占位，请替换为真实联系方式。
- 文档里建议准备 UNPLAN 实景照片、团队照、项目 before/after 等真实图片，
  替换当前的色块/图标占位（参见文档「视觉素材建议」）。
