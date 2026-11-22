<script setup>
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

defineProps({ alt: { type: String, required: true } })

const { isDark } = useData()
const historyImage = computed(() => withBase(
  isDark.value ? '/images/intro-history/dark.webp' : '/images/intro-history/light.webp'
))
</script>

<template>
  <a class="intro-history" :href="historyImage" data-no-router>
    <img :src="historyImage" :alt="alt" width="2768" height="1768">
  </a>
</template>

<style scoped>
.intro-history {
  display: block;
  width: 80%;
  margin: 24px auto clamp(24px, 3vw, 48px);
}

.intro-history img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
