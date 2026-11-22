<script setup>
import { VPImage } from 'vitepress/theme'
</script>

# Sync accounts

Clipboard sync and history sync both use the currently selected sync account.

::: info
Only the official SyncClipboard server supports history sync.
:::

## Add server details

1. In the desktop client, open **Syncing → Sync Account → Add Account**.
2. Choose the **Account Type** that matches your server. For the standalone SyncClipboard server or the desktop client’s built-in server, select **SyncClipboard**.
3. Fill in the fields for the selected account type, then select **Confirm** to save.

<VPImage
  :image="{
    light: '/images/desktop-accounts/en-light-form.webp',
    dark: '/images/desktop-accounts/en-dark-form.webp',
    alt: 'Add Account with SyncClipboard selected and the server address, username, and password fields filled in.'
  }"
  width="850"
/>

## Select the account to use

After saving, you return to **Syncing**. Open the dropdown on the right of **Sync Account** and select the account you just added. The dropdown now shows the account’s name and server.

<VPImage
  :image="{
    light: '/images/desktop-accounts/en-light-selected.webp',
    dark: '/images/desktop-accounts/en-dark-selected.webp',
    alt: 'The Sync Account dropdown shows the selected demo account, its server, and the SyncClipboard account type.'
  }"
  width="850"
/>

To sync this device’s clipboard, turn on **Clipboard Syncing** on this page. To sync history across devices, turn on **Sync History** in [History settings](../history#syncing-to-other-devices).
