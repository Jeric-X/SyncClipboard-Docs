# WebDAV and S3

Desktop and Android clients can store the current clipboard in a WebDAV directory or S3-compatible bucket. All devices must use the same directory or object prefix. For cross-device history sync, choose a [SyncClipboard server](./server).

## Connect to WebDAV

1. Create a dedicated directory such as `syncclipboard` on your WebDAV server. Copy its **WebDAV URL**. Services such as Nextcloud have a separate URL for browsing files in a web browser.
2. Add a WebDAV account in the client. Enter the full folder URL, for example `https://dav.example.com/dav/syncclipboard`, and credentials with read/write access. Encode spaces as `%20` and omit the trailing slash.
3. Use the same folder on every device. Desktop clients create the `file` subdirectory for attachments. If you only use mobile tools, create it yourself.

If text works but transferring images or files fails, check that the `file` subdirectory exists and that the account can write files there.

## Connect to S3-compatible storage

Prepare a bucket and credentials with the storage provider, then add an S3 account in each client.

| Client field | Value |
| --- | --- |
| Endpoint | Leave empty for AWS, or enter your provider’s S3 API endpoint |
| Region | The provider’s signing region, for example `us-east-1` |
| Bucket name | The name of your existing bucket |
| Object prefix | Optional, for example `syncclipboard`. Use the same value on all devices |
| Force path-style addressing | Use the setting required by your provider. Many compatible services use path-style addressing |
| Access Key ID and Secret Access Key | Credentials with read/write access to the chosen storage location |

Upload a short text on one device and download it on the other. If both can connect but see different content, compare the bucket and prefix values, including capitalization.
