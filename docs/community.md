---
outline: [2, 3]
---

# 社区项目

这里收录了支持 SyncClipboard API 的第三方客户端和工具。

## Android

### Sync Clipboard Flutter

使用 Flutter 构建的 Android 客户端，采用 Material 3 界面，通过 SyncClipboard API 同步剪贴板。可以从控制中心快速上传或下载剪贴板内容。系统要求和使用步骤见[项目 README](https://github.com/bling-yshs/sync-clipboard-flutter)。

### SyncAutojs6

适用于 Android 10 及以上版本的 [AutoJs6](https://github.com/SuperMonster003/AutoJs6) 脚本。脚本通过悬浮窗在后台读取剪贴板，实现后台同步。[SyncAutojs6 项目](https://github.com/imgs/SyncAutojs6)

### Fcitx5-SyncClipboard

为 Fcitx5-Android 开发的输入法插件，利用输入法权限自动同步剪贴板。它支持长文本、图片和文件。收到文件时，插件会自动下载文件，并将文件的 URI 复制到剪贴板。使用方法和注意事项见[项目 README](https://github.com/qh7574/Fcitx5-SyncClipboard)。

### syncclipboard-xposed

用于自动同步剪贴板的 LSPosed 模块。启用后，复制内容即可触发同步。[syncclipboard-xposed 项目](https://github.com/shaklow/syncclipboard-xposed)

## HarmonyOS NEXT

### ClipLink

从 [ClipLink 发布页](https://github.com/xiebaiyuan/ClipLink/releases)下载社区客户端的 `.hap` 安装包，按[项目说明](https://github.com/xiebaiyuan/ClipLink)用 [auto-installer](https://github.com/likuai2010/auto-installer) 或 `hdc install` 侧载安装（系统限制暂不支持直接安装）。

打开 ClipLink，填写 SyncClipboard 服务端地址、用户名和密码。若服务端运行在电脑上，填写鸿蒙设备能访问的电脑地址。
