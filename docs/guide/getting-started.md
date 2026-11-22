# 开始同步

## 准备服务器

在一台所有同步设备都能访问的服务器上安装 SyncClipboard 服务端，或选择你正在使用的 WebDAV、S3 服务作为同步服务器。

官方服务器支持实时剪贴板同步、剪贴板历史记录同步；WebDAV、S3 服务器仅支持实时剪贴板同步。

如果所有设备都在同一局域网，可以启用桌面客户端的内置服务器，无需独立部署。

- [使用 Docker 部署服务器](../server/#docker)
- [使用桌面客户端内置服务器](../desktop/builtin-server)

## 连接设备

服务器准备好后，将需要共享剪贴板的设备连接到同一个服务器。根据设备选择对应的设置方法：

- **Windows、macOS 或 Linux**：在桌面客户端中[添加同步账号](../desktop/sync/accounts)。
- **Android**：在 [SyncClipboard Mobile](../mobile/#android) 中打开「设置 → 服务器配置 → 添加」，填写服务器信息。
- **iPhone 或 iPad**：[导入快捷指令](../mobile/#ios)，按提示填写服务器信息。
