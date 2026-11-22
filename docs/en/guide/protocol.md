# Clipboard protocol

Clients can read and write the current clipboard over HTTP. The SyncClipboard server and WebDAV share the `SyncClipboard.json` and `file/` layout. S3 clients access the corresponding object keys through the storage API. [S3 protocol specification](https://github.com/Jeric-X/SyncClipboard/blob/master/docs/S3-Adapter-Design.md)

## Read and write

First issue `GET /SyncClipboard.json`. When `hasData` is `true`, follow with `GET /file/{dataName}` to retrieve the full content. Paths are relative to the configured working directory.

To publish an attachment, upload it with `PUT /file/{dataName}` first. Once that succeeds, publish the new metadata with `PUT /SyncClipboard.json` so other devices can retrieve the referenced file. A short text needs only one JSON write:

```json
{
  "type": "Text",
  "text": "Hello from SyncClipboard",
  "hasData": false
}
```

## Fields

Field names are case-sensitive.

| Field | Meaning |
| --- | --- |
| `type` | Required. One of `Text`, `Image`, `File`, or `Group` |
| `text` | Required. Full short text or a preview |
| `hasData` | Required. Always `true` for images, files and groups. Long text can also be stored in a separate UTF-8 file |
| `dataName` | Required for attachments. Filename under `file/` |
| `hash` | Optional. Identifies clipboard content for deduplication and validation. The algorithm depends on the content type |
| `transferDataHash` | Optional for attachments. SHA-256 of the actual transferred bytes, encoded as 64 uppercase hexadecimal characters |
| `size` | Optional. Byte count for files, full string length for text |
| `syncedAt` | Optional. ISO 8601 submission time with UTC offset. The official server supplies its own time. WebDAV and S3 use the uploading client’s clock |

Device clocks may differ, so `syncedAt` cannot reliably order concurrent writes. For `hash`, follow the algorithm for the specific content type. [Profile hash algorithms](https://github.com/Jeric-X/SyncClipboard/blob/master/docs/Hash.md)

## Explore the server API

For local development, start the standalone server with `ASPNETCORE_ENVIRONMENT=Development`, or enable diagnostic mode in the desktop app when running the built-in server. Open `/swagger/index.html` at the server address to explore additional endpoints, including history.
