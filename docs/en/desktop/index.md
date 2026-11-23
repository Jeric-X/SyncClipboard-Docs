# Download and install the desktop client

## Windows

| Edition | x64 | ARM64 | Installation |
| --- | --- | --- | --- |
| Installer (EXE) | [Download](https://github.com/Jeric-X/SyncClipboard/releases/latest/download/SyncClipboard_win_x64_installer.exe) | [Download](https://github.com/Jeric-X/SyncClipboard/releases/latest/download/SyncClipboard_win_arm64_installer.exe) | Run the installer and follow the prompts. |
| Portable (ZIP) | [Download](https://github.com/Jeric-X/SyncClipboard/releases/latest/download/SyncClipboard_win_x64_portable.zip) | [Download](https://github.com/Jeric-X/SyncClipboard/releases/latest/download/SyncClipboard_win_arm64_portable.zip) | Extract the ZIP and run `SyncClipboard.exe`. |

To install with WinGet, run:

```powershell
winget install --id JericX.SyncClipboard --exact --source winget
```

> [!NOTE]
> - The minimum supported version is Windows 10, version 2004.
> - On Windows 10, manually install the [Segoe Fluent Icons](https://aka.ms/SegoeFluentIcons) font.

## macOS

| **Format** | **x64** | **ARM64** | **Installation** |
| :----- | :------ | :-------- | :------- |
| DMG | [Intel](https://github.com/Jeric-X/SyncClipboard/releases/latest/download/SyncClipboard_macos_x64.dmg) | [Apple silicon](https://github.com/Jeric-X/SyncClipboard/releases/latest/download/SyncClipboard_macos_arm64.dmg) | Open the DMG and drag SyncClipboard to Applications. |

To install with Homebrew, run:

```sh
brew install --cask Jeric-X/tap/syncclipboard
```

> [!NOTE]
> - System requirements: macOS 12.7 or later on Apple silicon, macOS 13.3 or later on Intel.
> - If macOS says the developer cannot be verified, open **System Settings → Privacy & Security** and click **Open Anyway**.
> - If macOS says the app is damaged or otherwise reports that it cannot be opened, open Terminal and run `sudo xattr -d com.apple.quarantine /Applications/SyncClipboard.app`.

## Linux

| Package | x64 | ARM64 |
| --- | --- | --- |
| DEB | [Download](https://github.com/Jeric-X/SyncClipboard/releases/latest/download/SyncClipboard_linux_x64.deb) | [Download](https://github.com/Jeric-X/SyncClipboard/releases/latest/download/SyncClipboard_linux_arm64.deb) |
| RPM | [Download](https://github.com/Jeric-X/SyncClipboard/releases/latest/download/SyncClipboard_linux_x64.rpm) | — |
| AppImage | [Download](https://github.com/Jeric-X/SyncClipboard/releases/latest/download/SyncClipboard_linux_x64.AppImage) | [Download](https://github.com/Jeric-X/SyncClipboard/releases/latest/download/SyncClipboard_linux_arm64.AppImage) |

On Arch Linux and Arch-based distributions, you can install `syncclipboard-desktop` from the [AUR](https://aur.archlinux.org/packages/syncclipboard-desktop).

> [!NOTE]
> - To use a package other than AppImage, your system needs glibc 2.38 or later.
> - If syncing lags or uploads garbled text, you can [use xclip or wl-clipboard to help SyncClipboard read and write the clipboard](./linux-clipboard-tools).
> - If hotkeys or copy/paste misbehave on Wayland, see the [input device permissions guide](./linux-input-permissions).

## Uninstall

To remove SyncClipboard completely, also delete the application data directory for your system.

- Windows: `%AppData%\SyncClipboard\`
- macOS: `~/Library/Application Support/SyncClipboard/`
- Linux: `~/.config/SyncClipboard/`
