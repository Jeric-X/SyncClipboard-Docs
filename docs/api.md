# API

在独立服务器运行环境下设定环境变量ASPNETCORE_ENVIRONMENT为Development后运行服务器，或桌面客户端打开服务器并打开设置里的诊断模式后，
访问`http://ip:端口/swagger/index.html`可以打开API描述页面

API路径不以`/api/`起始的为WebDAV兼容API，实现客户端时，调用此类API可以同时支持基于WebDAV服务器与SyncClipboard官方服务器的剪贴板同步功能，其中的关键API的说明如下

## 获取剪贴板
```shell
GET /SyncClipboard.json
GET /file/dataName            # optional
```

## 上传剪贴板
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

- API所有字段大小写敏感
- `text`储存剪贴板预览字符串，或完整的Text类型剪贴板内容
- `hasData`标识是否使用一个额外文件存储完整的剪贴板信息
  - 对于Image/File/Group类型，`hasData`恒为true
  - 对于Text类型，可以根据原字符串的长度，可选是否使用额外的UTF8编码的`.txt`文件存储完整字符串，如果这样做，`text`字段仅储存完整字符串的起始部分内容
- `hash`值为剪贴板内容的唯一标识，计算方法请参考[Hash 计算方法](./hash.md)
  - 发送方应尽量提供`hash`信息
  - 当`hash`值存在时，接收方应验证`hash`信息与剪贴板内容的一致性，在不一致时执行错误处理流程
  - 当`hash`为空时，或处于无法计算`hash`的环境，可以使用`type`/`text`的组合简单判断剪贴板内容的相等性
- `transferDataHash`是实际传输文件完整字节流的 SHA-256，使用 64 位大写十六进制字符串，用于校验传输文件完整性
  - 仅在 `hasData` 为 `true` 时使用
- `size`标识复制文件的总字节大小，或Text类型剪贴板完整字符串的长度，仅用于展示
- `syncedAt`记录当前远端剪贴板的提交时间，使用带 UTC 偏移量的 ISO 8601 时间
  - 官方服务器收到剪贴板推送时会使用服务器时间，忽略客户端提供的时间
  - WebDAV/S3 由客户端在推送时设置
  - 客户端时钟可能不同，不应使用该字段判断并发写入顺序

## S3 同步协议规范

使用 S3 兼容对象存储作为同步后端时的协议与数据格式规范请参阅 [S3 设计规范](./s3.md)。
