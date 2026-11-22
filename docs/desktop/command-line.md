# 命令行参数

## `--command-{command-name}`

执行桌面客户端的快捷键命令。为某个操作设置快捷键后，可以在配置文件中找到对应的命令名称，用它替换 `{command-name}`。之后即使清除快捷键，仍可通过命令行执行该操作。

如果客户端已在运行，命令会交给现有实例执行；如果尚未运行，客户端会先启动，再执行命令。一次可以传入多个 `--command-{command-name}` 参数。

## `--shutdown-previous`

关闭正在运行的客户端实例，然后启动新实例。

## `--app-data-dir <目录>`

指定此实例使用的应用数据目录。使用不同目录可以运行彼此独立的实例，各自保存配置和历史记录。路径包含空格时，请用引号括起来。

例如，在 macOS 上使用应用包内的可执行文件启动一个独立实例：

```sh
/Applications/SyncClipboard.app/Contents/MacOS/SyncClipboard.Desktop.MacOS --app-data-dir "$HOME/SyncClipboard-Test"
```
