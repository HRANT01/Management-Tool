<template>
  <div
      class="max-w-full min-h-full  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700">
    <a href="#">
      <h5 class=" text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Projects List</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      <ol>
        <li v-for="project in projects"
            class="dark:text-white border-b-2 rounded mt-1 pb-2 text-2xl hover:text-orange-400 cursor-pointer ">
          {{ project }}
        </li>
      </ol>
    </p>
    <a class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
       href="#">
      Read more
    </a>
  </div>
</template>


<script lang="ts" setup>

import {ref} from "vue";

const projects = ref(['Market Research 2024', 'New Proposals', 'Brand Sprints', 'Customer XP Q3', 'Market Research 2025'])

</script>