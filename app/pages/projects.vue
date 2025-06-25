<script setup lang="ts">
const { data: page } = await useAsyncData('services', () => {
  return queryCollection('services').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}
const { global } = useAppConfig()

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      orientation="horizontal"
      :title="page.title"
      :description="page.description">
      <img :src="page.image.src" :alt="page.image.alt">
    </UPageHero>
      <UPageBody>
        <ContentRenderer
            v-if="page.body"
            :value="page"
          />
      </UPageBody>
  </UPage>
</template>
