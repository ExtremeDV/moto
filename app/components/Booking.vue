<script lang="ts" setup>
  import { createReusableTemplate, useMediaQuery } from '@vueuse/core'
  import { z } from 'zod'

  const [DefineFormTemplate, ReuseFormTemplate] = createReusableTemplate()
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const { global } = useAppConfig()
  const toast = useToast()
  const open = ref(false)

  // Схема валидации с помощью Zod
  const formSchema = z.object({
    name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
    phone: z.string().regex(/^\+?\d{10,15}$/, 'Введите корректный номер телефона')
  })

  const state = reactive({
    name: '',
    phone: ''
  })

  const title = 'Записаться на обучение'
  const description = 'Оставьте заявку на обучение, и мы свяжемся с вами в ближайшее время'

  // Функция закрытия формы
  const closeForm = () => {
    open.value = false
  }
 

  // Функция отправки формы
  const submitForm = async () => {
    try {
      // Валидация данных формы
      formSchema.parse(state)

      // Отправка запроса на сервер
      const response = await $fetch('/api/send-email', {
        method: 'POST',
        body: {
          name: state.name,
          phone: state.phone
        }
      })

      if (response.success) {
        // Очистка формы при успешной отправке
        state.name = ''
        state.phone = ''
        
        toast.add({
          title: 'Успех!',
          description: 'Заявка успешно отправлена',
          color: 'success',
          onClose: () => {
            closeForm()
          }
        })
      }
    } catch (error) {
      let errorMessage = 'Произошла ошибка при отправке заявки'
      
      if (error instanceof z.ZodError) {
        errorMessage = error.errors[0].message
      } else if (error instanceof Error) {
        errorMessage = error.message
      }

      toast.add({
        title: 'Ошибка',
        description: errorMessage,
        color: 'error'
      })
    }
  }
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <DefineFormTemplate>
      <UForm 
        :state="state" 
        :schema="formSchema"
        @submit="submitForm"
        class="space-y-4 flex flex-col justify-center items-center"
      >
        <UFormField label="Ваше имя" name="name" required>
          <UInput v-model="state.name" placeholder="Никита" required size="xl" class="w-full" />
        </UFormField>
        <UFormField label="Номер телефона" name="phone" required>
          <UInput v-model="state.phone" placeholder="+79031234567" required size="xl" class="w-full" />
        </UFormField>
        <UButton size="xl" label="Отправить заявку" type="submit" />
      </UForm>
    </DefineFormTemplate>

    <UModal v-if="isDesktop" v-model:open="open" :title="title" :description="description">
      <div class="flex flex-col items-center">
        <UButton 
          class="cursor-pointer" 
          :label="global.booking?.label"
          :color="global.booking?.color as 'error' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'neutral' || 'primary'"
          size="xl" 
        />
      </div>
      <template #body>
        <ReuseFormTemplate />
      </template>
    </UModal>

    <UDrawer v-else v-model:open="open" :title="title" :description="description">
      <div class="flex flex-col items-center">
        <UButton 
          class="cursor-pointer" 
          :label="global.booking?.label"
          :color="global.booking?.color as 'error' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'neutral' || 'primary'"
          size="xl" 
        />
      </div>
      <template #body>
        <ReuseFormTemplate />
      </template>
    </UDrawer>

    <a :href="`tel:${global.phone}`" class="text-2xl font-800 mt-4">{{ global.phone }}</a>
  </div>
</template>