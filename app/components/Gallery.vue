<script setup>
import { ref } from 'vue'
import { useFetch } from '#app'

const { data: imagePaths } = await useFetch('/api/gallery')

// Берем последние 9 изображений для отображения
const latestImages = imagePaths.value.slice(-9)

// Состояние модального окна
const isModalOpen = ref(false)
const selectedIndex = ref(0)

// Открытие модального окна с правильным индексом в полном списке
function openModal(index) {
  const selectedImage = latestImages[index]
  selectedIndex.value = imagePaths.value.indexOf(selectedImage)
  isModalOpen.value = true
}
</script>

<template>
  <div>
        <UModal v-model="isModalOpen" title="Фотогалерея" :ui="{ content: 'sm:max-w-[65%] max-w-none mx-auto' }">
    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="(image, index) in latestImages"
        :key="index"
        class="aspect-square cursor-pointer"
        @click="openModal(index)"
      >
        <img
          :src="image"
          :alt="`Изображение ${index + 1}`"
          class="object-cover w-full h-full"
        />
      </div>
    </div>
      <template #body>
        <UCarousel
          v-slot="{ item }"
          :items="imagePaths"
          :startIndex="selectedIndex"
          arrows
          :loop="true"
          :ui="{ root: 'sm:max-w-[65%] max-w-none mx-auto items-center p-0', arrows: 'hidden sm:block', container: 'items-center' }"
          >
          <img
            :src="item"
            alt="Изображение"
            class="max-h-[75vh] mx-auto"
          />
        </UCarousel>
      </template>
    </UModal>
  </div> 
</template>

<style scoped>
.aspect-square {
  aspect-ratio: 1 / 1;
}
</style>