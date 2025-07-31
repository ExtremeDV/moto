<script lang="ts" setup>
import { createReusableTemplate, useMediaQuery } from '@vueuse/core'

const [DefineFormTemplate, ReuseFormTemplate] = createReusableTemplate()
const isDesktop = useMediaQuery('(min-width: 768px)')

const { global } = useAppConfig()

const open = ref(false)

const state = reactive({
  name: undefined,
  phone: undefined
})
const title = 'Записаться на обучегние'
const description = 'Оставьте заявку на обучение, и мы свяжемся с вами в ближайшее время'
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <DefineFormTemplate>
      <UForm
        :state="state"
        class="space-y-4 flex flex-col justify-center items-center">
        <UFormField label="Ваше имя" name="name" required>
          <UInput v-model="state.name" placeholder="Никита" required size="xl" class="w-full"/>
        </UFormField>
        <UFormField label="Номер телнфона" name="phone" required>
          <UInput v-model="state.phone" placeholder="89031234567" required size="xl" class="w-full"/>
        </UFormField>
        <UButton size="xl" label="Отправить заявку" type="submit" />
      </UForm>
    </DefineFormTemplate>

    <UModal v-if="isDesktop" v-model:open="open" :title="title" :description="description">
      <div class="flex flex-col items-center">
        <UButton class="cursor-pointer"  :label="global.booking?.label" :color="global.booking?.color as 'error' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'neutral' || 'primary'" size="xl" />
      </div>
      <template #body>
        <ReuseFormTemplate />
      </template>
    </UModal>
  
    <UDrawer v-else v-model:open="open" :title="title" :description="description">
      <div class="flex flex-col items-center">
        <UButton class="cursor-pointer"  :label="global.booking?.label" :color="global.booking?.color as 'error' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'neutral' || 'primary'" size="xl" />
      </div>
      
      <template #body>
        <ReuseFormTemplate />
      </template>
    </UDrawer>
    <a :href="`tel:${global.phone}`" class="text-2xl font-800 mt-4">{{ global.phone }}</a>
  </div>
</template>
