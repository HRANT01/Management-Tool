<template>
  <div v-for="task in Tasks" :key="task">
    <div class="w-full flex justify-between p-6 border-4 items-center rounded-2xl m-5">
      <p class="name text-xl">{{ task.name }}</p>
      <p class="dueDate text-xl">{{ task.dueDate }}</p>
      <p class="status text-xl">{{ task.status }}</p>
      <p class="priority text-xl">{{ task.priority }}</p>
      <p class="department text-xl">{{ task.department }}</p>
      <div class="flex">
        <CustomButton button-color="blue">Edit</CustomButton>
        <CustomButton button-color="red">Delete</CustomButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useStore} from "vuex";
import {computed} from "vue";
import CustomButton from "@/components/ui/CustomButton.vue";

const store = useStore()

const Tasks = computed(() => store.getters.getCurrentTasks)

</script>

<style lang="scss" scoped>

</style>