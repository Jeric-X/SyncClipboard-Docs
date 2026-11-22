---
outline: [2, 3]
---

# Server
## Standalone Server
[SyncClipboard.Server](https://github.com/Jeric-X/SyncClipboard/releases/) is cross-platform, depends on [ASP.NET Core 10.0](https://dotnet.microsoft.com/en-us/download/dotnet/10.0). Run with:
```
dotnet /path/to/SyncClipboard.Server.dll --contentRoot ./
```
Content root folder is `SyncClipboard.Server.dll`'s parent folder. Writing permission is needed. Choosing a different content root folder is possible. Copy a new `appsettings.json` to the folder and run with:
```
dotnet /path/to/SyncClipboard.Server.dll --contentRoot /path/to/contentRoot
```

### Server Configuration
`appsettings.json` is the config file.
```jsonc
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "Kestrel": {
    "Endpoints": {
      "http": {
        "Url": "http://*:5033"
      },
      //"https": {
      //  "Url": "https://*:5033"
      //}
    },
    //"Certificates": {
    //  "Default": {
    //    "Path": "/path/to/pem",
    //    "KeyPath": "/path/to/pem_key"
    //  }
    //}
  },
  "AppSettings": {
    "UserName": "your_username",
    "Password": "your_password",
    "MaxSavedHistoryCount": 1000, // Maximum history count; 0 means no count limit. The retention time limit still applies.
    "ProtectTaggedRecords": true, // Keep tagged records during automatic cleanup.
    "ProtectTitledRecords": true, // Keep titled records during automatic cleanup.
    "HistoryRetentionMinutes": 0 // Retention in minutes; 0 means no time limit. The history count limit still applies.
  }
}
```
For more information, please refer to the [official Microsoft documentation](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/kestrel/endpoints?view=aspnetcore-10.0#configure-https-in-appsettingsjson).

Username and password can be set by environment variables. When the environment variables `SYNCCLIPBOARD_USERNAME` and `SYNCCLIPBOARD_PASSWORD` are both set, they will be used as the username and password.  

`ASPNETCORE_hostBuilder__reloadConfigOnChange` is used to configure whether to automatically detect changes in `appsettings.json` and reload the configuration. The default value is false. Changing it to any value other than false will enable this feature.

> [!WARNING]  
> HTTP transmits data in plaintext. When deploying the server on a public network, please enable HTTPS or configure HTTPS using a reverse proxy tool. If obtaining a certificate from a certificate authority is not possible, it is recommended to use the open-source tool [mkcert](https://github.com/FiloSottile/mkcert) or other methods to generate a self-signed certificate.

### Docker

```shell
# docker
docker run -d \
  --name=syncclipboard-server \
  -p 5033:5033 \
  -e SYNCCLIPBOARD_USERNAME=your_username \
  -e SYNCCLIPBOARD_PASSWORD=your_password \
  -v /data/syncclipboard-server:/app/data \
  --restart unless-stopped \
  jericx/syncclipboard-server:latest

# docker compose
curl -sL https://github.com/Jeric-X/SyncClipboard/raw/master/src/SyncClipboard.Server/docker-compose.yml >> docker-compose.yml
docker compose up -d
```

After the container starts for the first time, a default `appsettings.json` will be automatically created in the container directory `/app/data` (which corresponds to the host directory `/data/syncclipboard-server`).  
When modifying `appsettings.json`, pay attention to the file path mapping between the container and the host.

### Arch Linux

You can install it directly from [AUR](https://aur.archlinux.org/packages/syncclipboard-server) (maintained by [@devome](https://github.com/devome)):

```shell
paru -Sy syncclipboard-server
```

The configuration file path is `/etc/syncclipboard/appsettings.json`. After modifying the configuration, you can start the service using `systemctl` command:

```shell
sudo systemctl enable --now syncclipboard.service
```

## Desktop Client Built-in Server
Desktop client (Windows/Linux/macOS) has a built-in server, can be configured with GUI.

## WebDAV Server
  
Tested server：   
- ✓ [Nextcloud](https://nextcloud.com/)
- ✓ [AList](https://alist.nn.ci/)
- ✓ [InfiniCLOUD](https://infini-cloud.net/en/)
- ✓ [aliyundrive-webdav](https://github.com/messense/aliyundrive-webdav)

## S3 Server
The desktop client supports AWS S3 via the official AWS SDK, and also supports OSS providers that expose an S3-compatible API.  
When adding an account, choose `S3` and configure:

- `Server Address`: Optional. Leave empty for AWS; set your endpoint for S3-compatible providers.
- `Region`: Signing region, for example `us-east-1`.
- `Bucket Name`: Bucket used to store `SyncClipboard.json` and `file/` objects.
- `Object Prefix`: Optional. Recommended to isolate data with a dedicated prefix (for example `syncclipboard`).
- `Force Path-Style Addressing`: Recommended for many S3-compatible providers.
- `Access Key ID` / `Secret Access Key`: Access credentials.
