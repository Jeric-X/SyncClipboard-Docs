<script setup>
import { VPImage } from 'vitepress/theme'
</script>

# 历史记录

在桌面客户端的「历史记录」设置页打开「历史记录」开关，客户端就会保存之后复制的内容。你也可以在这一页导出或导入历史记录备份。

## 打开历史记录面板

从托盘菜单中选择「历史记录面板」，或在「快捷键」设置页为「打开/隐藏历史记录面板」设置全局快捷键。

在面板顶部可以按内容类型筛选，也可以输入标题、文字或文件名来搜索。点击右上角的预览窗格按钮，再从左侧选中一条记录，即可在右侧查看内容。

<VPImage
  :image="{
    light: '/images/desktop-history/zh-light-panel.webp',
    dark: '/images/desktop-history/zh-dark-panel.webp',
    alt: '历史记录面板，左侧选中了发布文档前的检查清单，右侧预览清单内容。'
  }"
  width="850"
/>

## 自定义快捷键

历史记录面板里的许多操作都可以自定义快捷键，包括搜索、切换记录、收藏、显示或隐藏预览窗格，以及复制并粘贴。打开「历史记录」设置页，找到「历史记录面板快捷键」，点击对应操作右侧的铅笔按钮即可修改。

<VPImage
  :image="{
    light: '/images/desktop-history/zh-light-settings.webp',
    dark: '/images/desktop-history/zh-dark-settings.webp',
    alt: '历史记录面板快捷键设置，每行显示操作名称、当前按键组合和编辑按钮。'
  }"
  width="850"
/>

## 同步历史记录 {#同步到其他设备}

使用 SyncClipboard 官方服务器时，可以在「历史记录」设置页打开「同步历史记录」，在设备间同步历史记录。

## 自动删除 {#本地保留策略}

> [!IMPORTANT]
> 这里的自动删除设置只作用于本机未同步的历史记录。已同步的记录遵循[同步服务器的历史记录清理设置](../server/#服务器配置)。

在「历史记录」设置页的「自动删除」中，可以设置最大记录条数和保存时长（分钟）。收藏的记录会保留，也可以选择保留带标签或标题的记录。

<VPImage
  :image="{
    light: '/images/desktop-history/zh-light-retention.webp',
    dark: '/images/desktop-history/zh-dark-retention.webp',
    alt: '自动删除设置，包括最大记录条数、保存时长，以及保护带标签或标题的记录的开关。'
  }"
  width="850"
/>
