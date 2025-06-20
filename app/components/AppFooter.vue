<script setup lang="ts">
const { footer, global } = useAppConfig()
</script>

<template>
  <UFooter
    class="z-10 bg-default"
    :ui="{ left: 'text-xs' }"
  >

    <template #top class="flex flex-col items-center justify-center gap-2">
      <div class="text-2xl font-semibold text-center my-5">
        Наши контакты:
      </div>
      <UPageGrid>
        <UPageCard
        title="Теоритический класс"
        :description="global.address_class"
        />
        <UPageCard
        title="Мотодром"
        :description="global.address_area"
        />
        <UPageCard
        class="lg:col-span-1 sm:col-span-2"
        >
          <template #default>
            <Booking/>
          </template>
        </UPageCard>
      </UPageGrid>
    </template>

    <template #left>
      {{ footer.credits }}
    </template>

    <template #right>
      <template v-if="footer?.links">
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="{ size: 'xs', color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>
  </UFooter>
</template>
