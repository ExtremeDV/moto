<script lang="ts" setup>
import { createReusableTemplate, useMediaQuery } from '@vueuse/core'

const [DefineFormTemplate, ReuseFormTemplate] = createReusableTemplate()
const isDesktop = useMediaQuery('(min-width: 768px)')

const { global } = useAppConfig()

const open = ref(false)

const state = reactive({
  email: undefined
})
const title = 'Записаться на обучегние'
const description = "Оставьте заявку на обучение, и мы свяжемся с вами в ближайшее время"
</script>

<template>
  <DefineFormTemplate>
    <UForm :state="state" class="space-y-4">
      <UFormField label="Email" name="email" required>
        <UInput v-model="state.email" placeholder="shadcn@example.com" required />
      </UFormField>

      <UButton label="Save changes" type="submit" />
    </UForm>
  </DefineFormTemplate>

  <UModal v-if="isDesktop" v-model:open="open" :title="title" :description="description">
    <UButton class="cursor-pointer"  :label="global.booking?.label" :color="global.booking?.color as 'error' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'neutral' || 'primary'" />

    <template #body>
      <ReuseFormTemplate />
    </template>
  </UModal>

  <UDrawer v-else v-model:open="open" :title="title" :description="description">
    <UButton class="cursor-pointer" :label="global.booking?.label" :color="global.booking?.color as 'error' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'neutral' || 'primary'" />

    <template #body>
      <ReuseFormTemplate />
    </template>
  </UDrawer>
</template>
