# iOS and other mobile tools

## Use Shortcuts on iPhone or iPad

1. Open the [manual sync shortcut](https://www.icloud.com/shortcuts/321944d62831416f9d2ba7917917686a) and add it to Shortcuts.
2. Enter the same SyncClipboard or WebDAV server address, username and password used on your other devices. If you cannot edit these fields during import, finish importing, then edit the shortcut.
3. Copy some text on the iPhone, run the shortcut and choose upload. Copy something new on the other device, run the shortcut again, choose download, and paste into Notes.

The [automatic sync shortcut](https://www.icloud.com/shortcuts/05e7ac5aca5f4f588b776117cf740587) polls the server while it runs. You can edit its polling interval and notifications. Stop the running shortcut when finished.

## HarmonyOS NEXT

The community client ClipLink ships as a HAP package. Download it from the project’s Releases, follow its sideloading instructions, and connect to your server. [ClipLink project and installation guide](https://github.com/xiebaiyuan/ClipLink)

## Other Android integrations

In addition to [SyncClipboard Mobile](./android), community projects offer other ways to sync:

| Use case | Project |
| --- | --- |
| Use a Flutter client | [Sync Clipboard Flutter](https://github.com/bling-yshs/sync-clipboard-flutter) |
| Sync through the Fcitx5 input method | [Fcitx5-SyncClipboard](https://github.com/qh7574/Fcitx5-SyncClipboard) |
| Run a sync script with AutoJs6 | [SyncAutojs6](https://github.com/imgs/SyncAutojs6) |
| Use an Xposed module | [syncclipboard-xposed](https://github.com/shaklow/syncclipboard-xposed) |
