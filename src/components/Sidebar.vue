<template>
  <div
      class="flex flex-col justify-between items-center bg-[#171F39] rounded-r-lg shadow-md border border-gray-200 h-screen w-24">
    <div class="flex flex-col w-full justify-end mt-56 gap-3 items-center text-white mb-16">
      <slot></slot>
    </div>
    <div class="flex flex-col justify-items-end  text-white">
      <slot name="userSettings"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>
