# Start syncing

## Set up a server

Install the SyncClipboard server on a host that all your devices can reach, or use an existing WebDAV or S3 service as your sync server.

The official SyncClipboard server supports real-time clipboard sync and clipboard history sync. WebDAV and S3 support only real-time clipboard sync.

If all your devices are on the same local network, you can use the desktop client’s built-in server without deploying a separate server.

- [Deploy the server with Docker](./server/#docker)
- [Use the desktop client’s built-in server](./desktop/builtin-server)

## Connect your devices

Once the server is ready, connect each device that will share the clipboard to the same server.

- **Windows, macOS, or Linux** — [Add a sync account](./desktop/accounts) in the desktop client.
- **Android** — In [SyncClipboard Mobile](./mobile/#android), go to **Settings → Server Configuration → Add** and enter the server details.
- **iPhone or iPad** — [Import the shortcut](./mobile/#ios) and enter the server details when prompted.
