---
outline: [2, 3]
---

# Community projects

This page lists third-party clients and tools that support the SyncClipboard API.

## Android

### [Sync Clipboard Flutter](https://github.com/bling-yshs/sync-clipboard-flutter)

An Android client built with Flutter and styled with Material 3. It uses the SyncClipboard API and lets you upload or download clipboard contents from Quick Settings.

### [SyncAutojs6](https://github.com/imgs/SyncAutojs6)

An [AutoJs6](https://github.com/SuperMonster003/AutoJs6) script for Android 10 and later. It uses a floating overlay to read the clipboard in the background and sync its contents.

### [Fcitx5-SyncClipboard](https://github.com/qh7574/Fcitx5-SyncClipboard)

A plugin for Fcitx5-Android that uses the keyboard’s clipboard access to sync automatically. It supports long text, images, and files. When it receives a file, it downloads it and copies the file’s URI to the clipboard.

### [syncclipboard-xposed](https://github.com/shaklow/syncclipboard-xposed)

An LSPosed module for automatic clipboard sync. Once enabled, it syncs content as you copy it.

## HarmonyOS NEXT

### [ClipLink](https://github.com/xiebaiyuan/ClipLink)

Download the `.hap` package from the [ClipLink releases](https://github.com/xiebaiyuan/ClipLink/releases). Sideload it with [auto-installer](https://github.com/likuai2010/auto-installer) or `hdc install`.

Open ClipLink and enter the SyncClipboard server URL, username, and password. If the server runs on a computer, use an address reachable from the HarmonyOS device.
