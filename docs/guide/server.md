# SyncClipboard 服务器

桌面应用自带服务器，适合同一局域网里的设备。如果希望电脑关机后手机仍能访问剪贴板，可以把独立服务器放在常开的 NAS 或主机上。两种服务器在客户端均选择 **SyncClipboard 服务器**，都支持同步当前剪贴板和历史记录。已有云存储也可以[使用 WebDAV 或 S3](./storage)。

## 使用桌面内置服务器

打开桌面客户端的「服务器」页，配置用户名、密码和端口后开启服务。其他设备使用这台电脑的局域网 IP 和端口连接。如果这台电脑也要上传或接收内容，需要在「剪贴板同步」里添加账号并启用同步。[用电脑和手机完成第一次同步](./getting-started)

## 用 Docker 运行独立服务器

在主机上建立一个目录，保存以下 `compose.yaml`。先在同一目录的 `.env` 文件中设置 `SYNCCLIPBOARD_USERNAME` 和 `SYNCCLIPBOARD_PASSWORD`，各占一行，格式为 `变量名=你的值`。

```yaml
services:
  syncclipboard:
    image: jericx/syncclipboard-server:latest
    restart: unless-stopped
    ports:
      - "5033:5033"
    environment:
      SYNCCLIPBOARD_USERNAME: ${SYNCCLIPBOARD_USERNAME:?}
      SYNCCLIPBOARD_PASSWORD: ${SYNCCLIPBOARD_PASSWORD:?}
    volumes:
      - ./data:/app/data
```

在该目录运行：

```sh
docker compose up -d
```

客户端填写 `http://主机的局域网IP:5033` 和刚才配置的账号。容器首次启动后，配置文件在主机的 `data/appsettings.json`。两个账号环境变量均已设置时，其值优先于配置文件。通过公网访问时，为服务配置 HTTPS，可由反向代理终止 TLS。

## 直接运行 .NET 服务端

下载发布包中的 SyncClipboard.Server，安装 ASP.NET Core 10.0 运行时。进入解压目录，确认该目录可写，执行：

```sh
dotnet SyncClipboard.Server.dll --contentRoot .
```

账号位于 `appsettings.json` 的 `AppSettings.UserName` 和 `AppSettings.Password`。监听地址和端口位于 `Kestrel.Endpoints`。[服务端下载](https://github.com/Jeric-X/SyncClipboard/releases/latest)

## 历史记录保留

`MaxSavedHistoryCount` 控制最多保留的记录数，`HistoryRetentionMinutes` 控制保留时间。任何一项设为 `0` 都只会取消该项限制。可用 `ProtectTaggedRecords` 和 `ProtectTitledRecords` 在自动清理时保留带标签、带标题的记录。
