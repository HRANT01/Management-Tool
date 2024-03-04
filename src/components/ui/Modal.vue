<template>

  <!-- Main modal -->
  <div v-if="props.openModal" id="crud-modal" aria-hidden="true"
       class="bg-gray-500/25 flex justify-center h-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 items-center w-full md:inset-0  max-h-full"
       tabindex="-1">
    <div class="relative p-4 w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 v-if="!props.taskToEdit" class="text-lg font-semibold text-gray-900 dark:text-white">
            Create New Task
          </h3>
          <h3 v-else class="text-lg font-semibold text-gray-900 dark:text-white">
            Edit Task
          </h3>

          <button
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
              type="button"
              @click="closeModal">
            <svg aria-hidden="true" class="w-3 h-3" fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" stroke="currentColor" stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"/>
            </svg>
          </button>
        </div>
        <span v-if="errorMessage" class="text-red-500 ">
          {{ errorMessage }}
        </span>
        <!-- Modal body -->
        <form class="p-4 md:p-5">
          <div class="grid gap-4 mb-4 grid-cols-2">
            <div class="col-span-2">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="name">Name</label>
              <input id="name"
                     v-model="taskName"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     name="name"
                     placeholder="Type Task name" required=""
                     type="text"
              >
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="price">Due Date</label>
              <input v-model="deadline" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     name="price"
                     type="date"

            </div>
            <div class="col-span-2 sm:col-span-1">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                     for="category">Priority</label>
              <select
                  id="category"
                  v-model="priority"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                     for="Status">Status</label>
              <select
                  id="Status"
                  v-model="status"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Suspended">Suspended</option>
              </select>
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                     for="Department">Department</label>
              <select
                  id="Department"
                  v-model="department"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option value="QA">QA</option>
                <option value="Front-End">Front-End</option>
                <option value="Back-End">Back-End</option>
                <option value="Marketing">Marketing</option>
                <option value="HR">HR</option>
              </select>
            </div>

          </div>
          <custom-button v-if="!props.taskToEdit"
                         button-color="blue"
                         class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                         @clicked="validateAndCreateTask"
          >
            Add new task
          </custom-button>
          <custom-button v-else
                         button-color="blue"
                         class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                         @clicked="validateAndEditTask"
          >
            Edit task
          </custom-button>
        </form>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import CustomButton from "@/components/ui/CustomButton.vue";
import {I_TaskItem} from "@/store/interfaces";
import {ref, onMounted, watch} from "vue";
import {useStore} from "vuex";

const emits = defineEmits<{
  (e: 'closeModal'): void
  (e: 'create-task', value: I_TaskItem): void
}>()


const props = defineProps<{
  openModal: boolean | null
  taskToEdit?: I_TaskItem
}>()

const store = useStore()

const taskName = ref('')
const deadline = ref('')
const priority = ref('Low')
const status = ref('To Do')
const department = ref('')

const createTask = () => {
  const newTask = {
    taskName: taskName.value,
    deadline: deadline.value,
    priority: priority.value,
    status: status.value,
    department: department.value,
  };


  const existingTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

  existingTasks.push(newTask);

  store.dispatch('A_Create_Task', existingTasks);
};


const errorMessage = ref('')
const closeModal = () => {
  taskName.value = ''
  deadline.value = ''
  priority.value = 'Low'
  status.value = 'To Do'
  department.value = ''
  emits("closeModal")
}

const validateAndCreateTask = () => {
  if (!taskName.value || !deadline.value || !department.value) {
    errorMessage.value = 'All fields should be filled *';
    return;
  } else {
    errorMessage.value = '';
    createTask();

    closeModal();
  }
};

const validateAndEditTask = () => {
  if (!taskName.value || !deadline.value || !department.value) {
    errorMessage.value = 'All fields should be filled *';
    return;
  } else {
    errorMessage.value = '';
    updateTask()
  }
}

const updateTask = () => {
  let taskInfo = {
    taskName: taskName.value,
    status: status.value,
    deadline: deadline.value,
    priority: priority.value,
    department: department.value,
  }
  store.dispatch("A_Edit_Task", taskInfo)
}

watch(() => props.taskToEdit, (newTaskToEdit) => {
  if (newTaskToEdit) {
    taskName.value = newTaskToEdit.taskName
    deadline.value = newTaskToEdit.deadline
    priority.value = newTaskToEdit.priority
    status.value = newTaskToEdit.status
    department.value = newTaskToEdit.department
  }
})


</script>

<style scoped>

</style>