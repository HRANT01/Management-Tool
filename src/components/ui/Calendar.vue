<template>
  <div class="flex items-center justify-center px-4">
    <div class="max-w-sm w-full shadow-lg">
      <div class="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
        <div class="px-4 flex items-center justify-between">
          <span
              class="
              focus:outline-none
              text-base
              font-bold
              dark:text-gray-100
              text-gray-800
            "
              tabindex="0"
          >{{ months }}</span>
          <div class="flex items-center">
            <button
                aria-label="calendar backward"
                class="
                focus:text-gray-400
                hover:text-gray-400
                text-gray-800
                dark:text-gray-100
              "
            >
              <!-- Add your backward arrow SVG here -->
            </button>
            <button
                aria-label="calendar forward"
                class="
                focus:text-gray-400
                hover:text-gray-400
                ml-3
                text-gray-800
                dark:text-gray-100
              "
            >
              <!-- Add your forward arrow SVG here -->
            </button>
          </div>
        </div>
        <div class="flex items-center justify-between pt-12 overflow-x-auto">
          <table class="w-full">
            <thead>
            <tr>
              <!-- Header Days -->
              <th v-for="day in days" :key="day">
                <div class="w-full flex justify-center">
                  <p
                      class="
                        text-base
                        font-medium
                        text-center text-gray-800
                        dark:text-gray-100
                      "
                  >{{ day }}</p>
                </div>
              </th>
            </tr>
            </thead>
            <tbody>
            <!-- Calendar Days -->
            <tr v-for="week in calendar" :key="week">
              <td v-for="day in week" :key="day">
                <div
                    :class="['px-2 py-2 cursor-pointer flex w-full justify-center', { 'bg-blue-500 rounded-full': day === selectedDay }]">
                  <p
                      class="
                        text-base text-gray-500
                        dark:text-gray-100
                        font-medium
                      "
                  >{{ day }}</p>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import moment from 'moment';
import {onMounted, ref} from 'vue';

const today = moment().date();
const currentMonth = moment().month();
const currentYear = moment().year();

const months = moment().format('MMMM');
const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const calendar = ref([]);
const selectedDay = ref(0);
const daysInMonth = moment().daysInMonth();
const firstDayOfMonth = moment().startOf('month').day();
const weeks = Math.ceil((daysInMonth + firstDayOfMonth) / 7);

const clarifyDate = () => {
  let dayCount = 1;

  for (let week = 0; week < weeks; week++) {
    const weekArray = [];
    for (let day = 0; day < 7; day++) {
      if (week === 0 && day < firstDayOfMonth) {
        weekArray.push('');
      } else if (dayCount <= daysInMonth) {
        const currentDay = dayCount++;
        weekArray.push(currentDay);
        if (currentDay === today && moment().month() === currentMonth && moment().year() === currentYear) {
          selectedDay.value = currentDay;
        }
      } else {
        weekArray.push('');
      }
    }
    calendar.value.push(weekArray);
  }
}

onMounted(() => {
  clarifyDate()
});

</script>

<style scoped>
/* Add your scoped styles here if needed */
</style>
