<template>
  <input :placeholder="props.placeholder" :type="props.type" class="input h-16 p-5 rounded-2xl w-full border-none outline-0"
         name="text">
</template>

<script lang="ts" setup>

const props = defineProps<{
  placeholder: string
  type: string
}>()

</script>

<style>
.input {
  box-shadow: 0px 0px 20px -18px;
}

.input:hover {
  border: 2px solid lightgrey;
  box-shadow: 0px 0px 20px -17px;
}

.input:focus {
  border: 2px solid grey;
}
</style>