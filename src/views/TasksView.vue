<template>
  <div class="w-full text-center">
    <top-bar>
      <template #Header>
        <div class="text-6xl ">
          Task Board
        </div>
      </template>
      <template #default>
        <div class="create flex w-full justify-between">
          <div>
            <Modal :open-modal="isModalOpen || !!taskToEdit" :task-to-edit="taskToEdit"
                   @close-modal="onCloseModal"></Modal>
          </div>
          <CustomButton button-color="blue" @clicked="openModal">Create Task</CustomButton>
        </div>
      </template>
    </top-bar>
    <div class="w-[90%] m-auto">
      <Table></Table>
    </div>

  </div>


</template>


<script lang="ts" setup>
import {computed, ref} from "vue";
import CustomButton from "@/components/ui/CustomButton.vue";
import Modal from "@/components/ui/Modal.vue";
import TopBar from "@/components/TopBar.vue";
import Table from "@/components/ui/Table.vue"
import {useStore} from "vuex";

const store = useStore()
const isModalOpen = ref<boolean>(false)

const taskToEdit = computed({
  get: () => {
    return store.getters.getTaskToEdit
  },
  set: () => {
    store.dispatch('A_Interrupt_Edit');
  }
});

const onCloseModal = () => {
  taskToEdit.value = false;
  isModalOpen.value = false;
}

const openModal = () => {
  isModalOpen.value = true
}


</script>
