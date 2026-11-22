# SyncClipboard Docs

SyncClipboard 桌面端、移动端和服务器的中英文使用文档，使用 VitePress 构建。

在项目根目录用 npm 安装依赖并启动本地开发服务器：

```sh
npm ci
npm run docs:dev
```

打开终端输出的本地地址。中文页面在 `docs/`，对应的英文页面在 `docs/en/`。侧栏和语言设置在 `docs/.vitepress/config.mjs`。

检查静态构建和页面链接：

```sh
npm run docs:build
npm run docs:preview
```

站点使用 SyncClipboard 和 SyncClipboard Mobile 项目的图标和截图，原项目授权见 `licenses/`。
