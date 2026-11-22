# Your first sync

Start with a computer and an Android phone on the same local network. The computer will host the shared clipboard. If you already have WebDAV or S3 storage, you can [connect both devices to it](./storage) instead.

## 1. Start the server on your computer

Install the [desktop app](./desktop). Open **Server**, set a username, password, and port, then turn on the server. The default port is `5033`. Find the computer’s LAN address, for example `192.168.1.20`.

## 2. Connect the computer’s clipboard

Open **Syncing → Sync Account → Add Account** and choose the SyncClipboard server type. Enter `http://127.0.0.1:5033` and the credentials you just set. Select the account and turn on clipboard syncing.

## 3. Connect your phone

Install the [Android app](./android). Open the server settings, add a SyncClipboard server, and enter the computer’s LAN address (for example `http://192.168.1.20:5033`) and the same credentials. Test the connection, save it and select it. On a phone, `127.0.0.1` points back to the phone itself.

## 4. Test both directions

Copy a distinct phrase such as `from my computer 123` on the computer. On the phone, open SyncClipboard, copy the entry under **Remote Clipboard**, and paste it into a note. Copy a different phrase on the phone, upload the local clipboard from the app, and paste it on the computer.

If the connection times out, check that the phone can reach the computer on Wi-Fi, the port matches, and the computer’s firewall allows LAN connections to that port. If the connection succeeds but the content stays the same, check the active account on each device and the desktop’s clipboard sync switch.
