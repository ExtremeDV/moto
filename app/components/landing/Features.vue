<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.features.title"
    :description="page.features.description"
    :features="page.features.feature"
    :ui="{ container: '!pt-10' }"
  />
</template>

<style scoped>

</style>