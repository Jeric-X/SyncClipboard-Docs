# Command-line arguments

## `--command-{command-name}`

Run a desktop client hotkey command. Assign a hotkey to an action, find its command name in the configuration file, and use that name in place of `{command-name}`. The command still works if the hotkey is later removed.

A running client executes the command in its existing instance. Otherwise, the client starts and then executes the command. A single invocation can include multiple `--command-{command-name}` arguments.

## `--shutdown-previous`

Close the running client instance and start a new one.

## `--app-data-dir <directory>`

Set the application data directory for this instance. Separate directories allow instances to run independently, each with its own settings and history. Quote paths that contain spaces.

On macOS, use the executable inside the app bundle. For example, to start a separate instance:

```sh
/Applications/SyncClipboard.app/Contents/MacOS/SyncClipboard.Desktop.MacOS --app-data-dir "$HOME/SyncClipboard-Test"
```
