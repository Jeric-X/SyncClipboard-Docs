<script setup>
import { VPImage } from 'vitepress/theme'
</script>

# 桌面客户端内置服务器

桌面客户端内置服务器与[独立部署的服务端](../server/#独立服务器)功能完全一致。如果同步网络中的几台设备都在同一局域网内，可以选择其中一台电脑开启服务器。

## 开启服务器

打开桌面客户端的「服务器」页面，点击端口和账号右侧的齿轮，设置端口、用户名和密码。设置好后，打开页面顶部的「服务器」开关。

<VPImage
  :image="{
    light: '/images/desktop-builtin-server/zh-light-server.webp',
    dark: '/images/desktop-builtin-server/zh-dark-server.webp',
    alt: '服务器页面，顶部是服务器开关，端口和账号右侧的齿轮用于修改设置。'
  }"
  width="850"
/>

开启服务器后，在其他客户端中添加 SyncClipboard 账号，服务器地址填写这台电脑的局域网地址（例如 `http://192.168.1.20:5033`），用户名和密码填写刚才在服务器上设置的凭据。

> [!NOTE]
> 只开启服务器不会使本设备自动启用同步，还需在本机[添加账号](./sync/accounts)。服务器地址的 IP 部分可以填本机地址 `127.0.0.1`，端口使用服务器实际设置的端口，例如 `http://127.0.0.1:5033`。
