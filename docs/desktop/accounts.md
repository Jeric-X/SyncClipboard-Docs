<script setup>
import { VPImage } from 'vitepress/theme'
</script>

# 同步账号

剪贴板同步和历史记录同步都使用当前选中的同步账号。

::: info
只有 SyncClipboard 官方服务器支持历史记录同步。
:::

## 添加服务器信息

1. 在桌面客户端打开 **剪贴板同步 → 同步账号 → 添加账号**。
2. 在「账号类型」中选择与你的服务器对应的类型。使用 SyncClipboard 独立服务端或桌面客户端内置服务器时，选 **SyncClipboard**。
3. 根据所选账号类型填写对应信息，点击「确定」保存。

<VPImage
  :image="{
    light: '/images/desktop-accounts/zh-light-form.webp',
    dark: '/images/desktop-accounts/zh-dark-form.webp',
    alt: '添加账号页面，账号类型已选 SyncClipboard，下方是服务器地址、用户名和密码。'
  }"
  width="850"
/>

## 选中要使用的账号

保存后会回到「剪贴板同步」页面。打开「同步账号」右侧的下拉框，选中刚添加的账号。如果框中显示「不选择」，说明当前还没有选中账号。

<VPImage
  :image="{
    light: '/images/desktop-accounts/zh-light-selected.webp',
    dark: '/images/desktop-accounts/zh-dark-selected.webp',
    alt: '同步账号下拉框已选中 demo 账号，显示服务器名和 SyncClipboard 类型。'
  }"
  width="850"
/>

要同步当前设备剪贴板，打开本页的「剪贴板同步」开关。要跨设备同步历史，在[历史记录设置](./history#同步到其他设备)中开启「同步历史记录」。
