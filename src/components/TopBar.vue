<template>
  <div class="flex flex-row p-6 justify-between">
    <div class="basis-1/4">
      <slot name="Header"></slot>
    </div>
    <div class="flex basis-1/2 ">
      <slot></slot>
    </div>
    <div v-if="props.isWithAvatar" class="flex basis-1/5 justify-center">
      <img :src="avatar" alt="User" class="w-1/6 min-w-20 max-h-20 h-auto rounded-full"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import avatar from '@/assets/avatar.png'

const props = defineProps<{
  isWithAvatar?: boolean
}>()

</script>

<style scoped>

</style>
