# Linux 剪贴板辅助工具

如果 SyncClipboard 读取的文本出现乱码，或无法在后台读取或写入剪贴板，可以使用辅助工具替代默认的剪贴板读写方式。

## 安装工具

在桌面终端运行 `echo "$XDG_SESSION_TYPE"` 查看当前会话类型，按结果安装对应的软件包。下表以 Debian 和 Ubuntu 为例，其他发行版可使用各自的包管理器安装同名软件包。

| 会话类型 | 安装命令 | 可用于 |
| --- | --- | --- |
| `x11` | `sudo apt install xclip` | 读取剪贴板 |
| `wayland` | `sudo apt install wl-clipboard` | 读取和写入剪贴板 |

## 在 SyncClipboard 中启用

打开「系统设置 → 剪贴板读写」。读取和写入可以分别设置。
