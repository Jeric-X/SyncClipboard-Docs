# API

In a standalone server environment, set the environment variable ASPNETCORE_ENVIRONMENT to Development before running the server, or open the server in the desktop client and enable diagnostic mode in settings.
Then visit `http://ip:port/swagger/index.html` to access the API description page.

APIs that do not start with `/api/` are WebDAV-compatible APIs. When implementing clients, calling these APIs can support clipboard synchronization based on both WebDAV servers and official SyncClipboard servers. The key APIs are described below.

## Get Clipboard
```shell
GET /SyncClipboard.json
GET /file/dataName            # optional
```

## Upload Clipboard
```shell
PUT /file/dataName            # optional
PUT /SyncClipboard.json
```

## SyncClipboard.json
```jsonc
{
  "type": "Text",                          // or Image/File/Group, required
  "hash": "string",                        // optional, empty string is treated as null
  "text": "string",                        // required
  "hasData": true,                         // or false, required
  "dataName": "string",                    // if hasData is true, required
  "transferDataHash": "string",            // optional
  "size": 0,                               // optional
  "syncedAt": "2026-10-09T15:30:00+08:00"  // optional
}
```

- All API fields are case-sensitive
- `text` stores the clipboard preview string, or the complete content of Text type clipboard
- `hasData` indicates whether an additional file is used to store the complete clipboard information
  - For Image/File/Group types, `hasData` is always true
  - For Text type, depending on the original string length, you can optionally use an additional UTF8-encoded `.txt` file to store the complete string. If so, the `text` field only stores the beginning part of the complete string
- `hash` value is a unique identifier of the clipboard content. For the calculation method, please refer to [docs/Hash.md](https://github.com/Jeric-X/SyncClipboard/blob/master/docs/Hash.md)
  - The sender should provide `hash` information whenever possible
  - When the `hash` value exists, the receiver should verify the consistency between the `hash` information and the clipboard content, and execute the error handling process when inconsistent
  - When `hash` is empty, or in an environment where `hash` cannot be calculated, you can use the combination of `type`/`text` to simply determine the equality of clipboard content
- `transferDataHash` is the SHA-256 of the complete byte stream of the actual transfer file, encoded as 64 uppercase hexadecimal characters, and is used to verify transfer file integrity
  - Use it only when `hasData` is `true`
- `size` indicates the total byte size of the copied file, or the length of the complete string for Text type clipboard
- `syncedAt` records when the current remote clipboard was submitted, as an ISO 8601 timestamp with a UTC offset
  - When the official server receives a clipboard upload, it uses the server's time and ignores the time provided by the client
  - For WebDAV/S3, the client sets this field when uploading
  - Client clocks may differ, so this field should not be used to determine concurrent write ordering

## S3 Sync Protocol Specification

For protocol and data format specifications when using S3-compatible object storage as sync backend, please refer to [S3 Adapter Design](https://github.com/Jeric-X/SyncClipboard/blob/master/docs/S3-Adapter-Design.md).
