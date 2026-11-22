# 桌面客户端

Windows、macOS 和 Linux 客户端都支持自动收发剪贴板和查看历史记录。[下载桌面客户端](https://github.com/Jeric-X/SyncClipboard/releases/latest)

## Windows

Windows 10 2004 及以上版本可运行桌面客户端。在发布页选择 `SyncClipboard_win_` 开头的 EXE 安装包；便携版使用同前缀的 ZIP，解压后运行 `SyncClipboard.exe`。也可以使用 WinGet：

```powershell
winget install --id JericX.SyncClipboard --exact --source winget
```

## macOS

选择适合芯片架构的 `SyncClipboard_macos_` 安装包，打开后把应用拖入「应用程序」。Apple Silicon 需要 macOS 12.7 或更高版本，Intel Mac 需要 macOS 13.3 或更高版本。Homebrew 用户可以运行：

```sh
brew install --cask Jeric-X/tap/syncclipboard
```

如果通过 SyncClipboard 触发复制或粘贴时没有反应，在「系统设置 → 隐私与安全性 → 辅助功能」检查应用授权。如果已授权仍然提示缺少权限，移除该条目，重新启动应用并再次授权。

## Linux

从发布页选择适合发行版和架构的 `SyncClipboard_linux_` 软件包。AppImage 需要可执行权限，其余安装包要求 glibc 2.38 或更高版本。Arch 用户可以安装 [AUR 包](https://aur.archlinux.org/packages/syncclipboard-desktop)。

遇到剪贴板读取延迟或乱码时，X11 用户检查 `xclip`，Wayland 用户检查 `wl-clipboard`。如果粘贴和全局快捷键异常，请按会话类型检查输入设备权限。[Linux 输入设备权限说明](https://github.com/Jeric-X/SyncClipboard/blob/master/docs/Linux-Input-Permissions.md)

## 连接与历史记录

在 **剪贴板同步** 页面添加并选中账号，然后开启同步。首次连接可跟着[第一次同步](./getting-started)验证两个方向。打开历史记录面板后，可以按类型筛选，或用文字内容、文件名查找之前复制的条目。在快捷键设置里可以为历史记录面板指定按键。

![桌面历史记录面板，左侧为记录列表，右侧预览选中的图片](/images/desktop-history.png)
