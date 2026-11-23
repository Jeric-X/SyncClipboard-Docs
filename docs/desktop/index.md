# 下载与安装

## Windows

| 版本 | x64 | ARM64 | 安装方式 |
| --- | --- | --- | --- |
| 安装版（EXE） | [下载](https://github.com/Jeric-X/SyncClipboard/releases/latest/download/SyncClipboard_win_x64_installer.exe) | [下载](https://github.com/Jeric-X/SyncClipboard/releases/latest/download/SyncClipboard_win_arm64_installer.exe) | 双击安装包，按提示完成安装。 |
| 便携版（ZIP） | [下载](https://github.com/Jeric-X/SyncClipboard/releases/latest/download/SyncClipboard_win_x64_portable.zip) | [下载](https://github.com/Jeric-X/SyncClipboard/releases/latest/download/SyncClipboard_win_arm64_portable.zip) | 解压后运行 `SyncClipboard.exe`。 |

也可以用 WinGet 安装：

```powershell
winget install --id JericX.SyncClipboard --exact --source winget
```

> [!NOTE]
> - 支持的最低系统版本为 Windows 10 2004。
> - Windows 10 需要手动安装 [Segoe Fluent Icons](https://aka.ms/SegoeFluentIcons) 字体。

## macOS

| **格式** | **x64** | **ARM64** | **安装方式** |
| :----- | :------ | :-------- | :------- |
| DMG | [Intel 芯片](https://github.com/Jeric-X/SyncClipboard/releases/latest/download/SyncClipboard_macos_x64.dmg) | [Apple 芯片](https://github.com/Jeric-X/SyncClipboard/releases/latest/download/SyncClipboard_macos_arm64.dmg) | 打开 DMG，将 SyncClipboard 拖入「应用程序」文件夹。 |

也可以用 Homebrew 安装：

```sh
brew install --cask Jeric-X/tap/syncclipboard
```

> [!NOTE]
> - 系统要求：Apple 芯片需要 macOS 12.7 或更高版本，Intel 芯片需要 macOS 13.3 或更高版本。
> - 提示「无法验证开发者」时，到「系统设置 → 隐私与安全性」点「仍要打开」。
> - 提示「已损坏，无法打开」或其他无法打开应用的提示，在终端运行 `sudo xattr -d com.apple.quarantine /Applications/SyncClipboard.app`。

## Linux

| 软件包 | x64 | ARM64 |
| --- | --- | --- |
| DEB | [下载](https://github.com/Jeric-X/SyncClipboard/releases/latest/download/SyncClipboard_linux_x64.deb) | [下载](https://github.com/Jeric-X/SyncClipboard/releases/latest/download/SyncClipboard_linux_arm64.deb) |
| RPM | [下载](https://github.com/Jeric-X/SyncClipboard/releases/latest/download/SyncClipboard_linux_x64.rpm) | — |
| AppImage | [下载](https://github.com/Jeric-X/SyncClipboard/releases/latest/download/SyncClipboard_linux_x64.AppImage) | [下载](https://github.com/Jeric-X/SyncClipboard/releases/latest/download/SyncClipboard_linux_arm64.AppImage) |

在 Arch Linux 及其衍生发行版上，可以从 [AUR](https://aur.archlinux.org/packages/syncclipboard-desktop) 安装 `syncclipboard-desktop`。

> [!NOTE]
> - 使用 AppImage 以外的软件包时，系统中的 glibc 需为 2.38 或更高版本。
> - 剪贴板同步不及时或上传乱码时，可以[使用 xclip 或 wl-clipboard 辅助 SyncClipboard 读写剪贴板](./linux-clipboard-tools)。
> - Wayland 下快捷键或复制粘贴异常时，参考[输入设备权限说明](./linux-input-permissions)。

## 卸载

彻底卸载时，除卸载程序外还要手动删除对应系统的应用数据目录。

- Windows：`%AppData%\SyncClipboard\`
- macOS：`~/Library/Application Support/SyncClipboard/`
- Linux：`~/.config/SyncClipboard/`
