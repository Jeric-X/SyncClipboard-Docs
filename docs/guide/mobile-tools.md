# iOS 与其他移动工具

## 在 iPhone 或 iPad 上使用快捷指令

1. 在「快捷指令」App 中导入[手动同步指令](https://www.icloud.com/shortcuts/321944d62831416f9d2ba7917917686a)。
2. 填入与其他设备相同的 SyncClipboard 或 WebDAV 服务器地址、用户名和密码。如果导入时无法编辑，先导入，再打开指令编辑这些字段。
3. 在 iPhone 上复制文字，运行指令并选择上传。在另一台设备复制新文字后，再运行指令并选择下载，然后粘贴到备忘录验证。

也可以导入[自动同步指令](https://www.icloud.com/shortcuts/05e7ac5aca5f4f588b776117cf740587)。它在运行期间循环查询服务器，可编辑查询间隔和通知选项，结束时手动停止指令。

## HarmonyOS NEXT

社区客户端 ClipLink 提供 HAP 安装包。从发布页下载后，按项目说明侧载安装并连接服务器。[ClipLink 项目与安装说明](https://github.com/xiebaiyuan/ClipLink)

## Android 的其他选择

除 [SyncClipboard Mobile](./android) 外，还有面向特定使用场景的社区实现：

| 使用场景 | 项目 |
| --- | --- |
| 使用 Flutter 客户端 | [Sync Clipboard Flutter](https://github.com/bling-yshs/sync-clipboard-flutter) |
| 在 Fcitx5 输入法中同步 | [Fcitx5-SyncClipboard](https://github.com/qh7574/Fcitx5-SyncClipboard) |
| 用 AutoJs6 脚本运行同步 | [SyncAutojs6](https://github.com/imgs/SyncAutojs6) |
| 使用 Xposed 模块 | [syncclipboard-xposed](https://github.com/shaklow/syncclipboard-xposed) |
