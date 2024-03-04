<template>


  <div class="relative h-full overflow-x-auto  shadow-md sm:rounded-lg dark:bg-gray-700">
    <table class="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th class="p-4" scope="col">
          <div class="flex items-center">
            <input id="checkbox-all-search"
                   class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                   type="checkbox">
            <label class="sr-only" for="checkbox-all-search">checkbox</label>
          </div>
        </th>
        <th class="px-6 py-3" scope="col">
          Task name
        </th>
        <th class="px-6 py-3" scope="col">
          Deadline
        </th>
        <th class="px-6 py-3" scope="col">
          Status
        </th>
        <th class="px-6 py-3" scope="col">
          Priority
        </th>
        <th class="px-6 py-3" scope="col">
          Department
        </th>

        <th class="px-6 py-3" scope="col">
          Action
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="task in currentTasks" :key="task.taskName"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="w-4 p-4">
          <div class="flex items-center">
            <input id="checkbox-table-search-1"
                   class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                   type="checkbox">
            <label class="sr-only" for="checkbox-table-search-1">checkbox</label>
          </div>
        </td>
        <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" scope="row">
          {{ task.taskName }}
        </th>
        <td class="px-6 py-4">
          {{ task.deadline }}
        </td>
        <td class="px-6 py-4">
          {{ task.status }}
        </td>
        <td class="px-6 py-4">
          {{ task.department }}
        </td>
        <td class="px-6 py-4">
          {{ task.priority }}
        </td>

        <td class="flex items-center px-6 py-4">
          <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="#"
             @click="editTask(task)">Edit</a>
          <a class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3" href="#"
             @click="removeTask(task.taskName)">Remove</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script lang="ts" setup>
import {useStore} from "vuex";
import {computed, ref,} from "vue";

const store = useStore();

const _currentTasks = ref<any>([]);

const currentTasks = computed({
  get: () => {
    const vuexTasks = store.getters.getCurrentTasks;
    const taskToEdit = store.getters.getTaskToEdit
    const localStorageTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return Array.from(new Set([...localStorageTasks]));
  },
  set: (value) => {
    _currentTasks.value = value;
  },
});

const removeTask = (taskName: string) => {
  store.dispatch("A_Remove_Task", taskName);
  currentTasks.value = currentTasks.value.filter(task => task.taskName !== taskName);
};


const editTask = (task: any) => {
  store.dispatch("A_Find_Task_By_Name", task)
}


</script>