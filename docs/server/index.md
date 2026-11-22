---
outline: [2, 3]
---

# 服务器
## 独立服务器
[SyncClipboard.Server](https://github.com/Jeric-X/SyncClipboard/releases/)支持跨平台运行，依赖[ASP.NET Core 10.0](https://dotnet.microsoft.com/zh-cn/download/dotnet/10.0)，安装`ASP.NET Core 运行时`后，通过以下命令运行
```
dotnet /path/to/SyncClipboard.Server.dll --contentRoot ./
```
工作目录与dll所在目录一致，需要写入权限。如需修改工作目录，拷贝一份`appsettings.json`到新工作目录并修改`--contentRoot`后的路径  

### 服务器配置
服务器通过`appsettings.json`文件配置，形式如下：
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
    "MaxSavedHistoryCount": 1000, // 历史记录数量上限，0 表示不限数量；保留时长限制仍生效
    "ProtectTaggedRecords": true, // 自动清理时保留带标签的记录
    "ProtectTitledRecords": true, // 自动清理时保留带标题的记录
    "HistoryRetentionMinutes": 0 // 历史记录保留时长（分钟），0 表示不限时长；数量限制仍生效
  }
}
```
如需启用HTTPS，请取消`https`和`Certificates`部分的注释，并设定HTTPS证书路径。最后将`http`部分注释或删除以关闭不安全的连接。如需同时启用HTTP和HTTPS，请将二者`Url`设置为不同的端口号  
不同类型证书的配置方法可以参考[微软官方文档](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/kestrel/endpoints?view=aspnetcore-10.0#configure-https-in-appsettingsjson)

用户名和密码支持使用环境变量配置，当环境变量`SYNCCLIPBOARD_USERNAME`、`SYNCCLIPBOARD_PASSWORD`均不为空时，将优先使用这两个环境变量作为用户名和密码  

环境变量`ASPNETCORE_hostBuilder__reloadConfigOnChange`用于配置是否自动识别appsettings.json变动并重载配置，默认值为`false`，修改为任何非`false`值后会启用此功能

> [!WARNING]  
> HTTP使用明文传输，在公共网络部署服务器请启用HTTPS或使用反向代理工具配置HTTPS。无法从证书颁发机构获取证书时，推荐使用开源工具[mkcert](https://github.com/FiloSottile/mkcert)或其他方式生成自签名证书

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

首次启动容器后，在容器目录`/app/data`（即主机`/data/syncclipboard-server`目录）下会自动创建默认的`appsettings.json`  
修改`appsettings.json`时，涉及文件路径的，请注意容器与主机间的文件映射关系

### Arch Linux

可以直接从 [AUR](https://aur.archlinux.org/packages/syncclipboard-server) 安装（由 [@devome](https://github.com/devome) 维护）：

```shell
paru -Sy syncclipboard-server
```

配置文件路径为`/etc/syncclipboard/appsettings.json`，修改配置后使用`systemctl`命令启动即可：

```shell
sudo systemctl enable --now syncclipboard.service
```

## 客户端内置服务器

桌面客户端（Windows/Linux/macOS）内置了服务器功能，可以使用可视界面配置

## WebDAV服务器
可以使用支持WebDAV协议的网盘作为服务器  
测试过的服务器：   

- ✓ [Nextcloud](https://nextcloud.com/) 
- ✓ [AList](https://alist.nn.ci/)
- ✓ [InfiniCLOUD](https://infini-cloud.net/en/)
- ✓ [aliyundrive-webdav](https://github.com/messense/aliyundrive-webdav)

## S3服务器
桌面客户端支持使用 AWS 官方 S3 SDK 直连 S3，也支持使用兼容 S3 API 的对象存储服务。  
添加账号时选择`S3`，配置以下字段：

- `Server Address`：可选，AWS 可留空；使用兼容 S3 的服务时填写对应 endpoint
- `Region`：签名区域，例如`us-east-1`
- `Bucket Name`：用于存储`SyncClipboard.json`与`file/`对象的 bucket
- `Object Prefix`：可选，建议设置独立前缀（如`syncclipboard`）隔离数据
- `Force Path-Style Addressing`：兼容服务建议开启
- `Access Key ID` / `Secret Access Key`：访问密钥
