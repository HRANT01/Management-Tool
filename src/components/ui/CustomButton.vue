<template>
  <button
      :class="buttonClasses"
      type="button"
      @click="emits('clicked')">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>

import {computed} from "vue";

const emits = defineEmits(['clicked'])

const buttonClasses = computed<string>(() => {
  switch (props.buttonColor) {
    case 'blue':
      return "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    case 'green':
      return "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    case 'red':
      return "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    default :
      return ''
  }
})

const props = defineProps<{
  buttonColor: string
}>()

</script>

<style lang="scss" scoped>

</style>