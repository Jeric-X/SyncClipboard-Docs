# 剪贴板协议

兼容客户端可以通过 HTTP 读取和写入当前剪贴板。SyncClipboard 服务器与普通 WebDAV 共用 `SyncClipboard.json` 和 `file/` 约定。S3 使用对象存储 API 访问对应的对象键。[S3 同步协议](https://github.com/Jeric-X/SyncClipboard/blob/master/docs/S3-Adapter-Design.md)

## 读取与写入

读取时先请求 `GET /SyncClipboard.json`。如果其中的 `hasData` 为 `true`，再请求 `GET /file/{dataName}` 获取完整数据。路径均相对于配置的工作目录。

写入带附件的条目时，先用 `PUT /file/{dataName}` 上传数据，成功后再 `PUT /SyncClipboard.json`。这样其他客户端读到新条目时，附件已经可取。短文本只需写入 JSON：

```json
{
  "type": "Text",
  "text": "你好，SyncClipboard",
  "hasData": false
}
```

## 数据字段

字段名区分大小写。

| 字段 | 含义 |
| --- | --- |
| `type` | 必填。支持 `Text`、`Image`、`File`、`Group` |
| `text` | 必填。存放完整短文本或预览 |
| `hasData` | 必填。图片、文件、文件组为 `true`；长文本也可放在单独的 UTF-8 文本文件中 |
| `dataName` | 有附件时必填，为 `file/` 下的文件名 |
| `hash` | 可选。标识剪贴板内容，用于判重和校验。计算规则随类型变化 |
| `transferDataHash` | 可选，仅用于有附件的条目。对实际传输文件的完整字节流计算 SHA-256，写成 64 位大写十六进制 |
| `size` | 可选。文件为字节数，文本为完整字符串长度 |
| `syncedAt` | 可选。提交时间，使用带时区偏移的 ISO 8601 格式。官方服务器填写服务端时间；WebDAV 和 S3 使用上传客户端时间 |

不同设备的时钟可能有偏差，`syncedAt` 不适合判断并发写入的先后。实现 `hash` 时，先确认使用的是该内容类型的算法。[各类型的 Hash 计算规则](https://github.com/Jeric-X/SyncClipboard/blob/master/docs/Hash.md)

## 查看官方服务器的其他接口

在本地开发环境，独立服务器启动前设置 `ASPNETCORE_ENVIRONMENT=Development`；桌面内置服务器则在应用设置中启用诊断模式。启动后访问服务地址的 `/swagger/index.html`，可查看历史记录等接口。
