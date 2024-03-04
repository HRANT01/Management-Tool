<template>
  <div class=" w-screen bg-[#f7f5f4] ">
    <top-bar is-with-avatar>
      <template #Header>
        <div class="text-2xl text-center font-sans font-bold">
          <h1>Welcome to your board</h1>
          <h3>Here is your agenda for today</h3>
        </div>
      </template>
      <SearchInput class="w-full" placeholder="Search..." required="" type="text"/>
    </top-bar>
    <div class="flex flex-row gap-4 w-screens ">
      <div class=" basis-1/4">
        <calendar></calendar>
      </div>
      <div class=" basis-1/4">
        <Team/>
      </div>

      <div class="w-full mr-3 basis-1/2">
        <card>
          <template #header>
            Fast Growing Technologies in 2024
          </template>
          <template #default>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi, aspernatur beatae consectetur culpa
            cupiditate dolores expedita facilis ipsum itaque iure iusto modi nisi nostrum porro praesentium quaerat,
            quam quia quibusdam reprehenderit sed unde vel veniam vero voluptatum. Adipisci autem dolorem eligendi id,
            incidunt inventore iure nemo provident tenetur veritatis. Aliquam corporis cum cumque debitis dolores
            ducimus earum facere hic id inventore iure laudantium modi molestiae nemo nihil
          </template>
        </card>
        <div class="flex justify-between p-8">
          <div class="w-[40%] align-bottom">
            <card>
              <template #header>
                <div class="text-center">
                  Total Projects
                </div>
              </template>
              <template #default>
                <p class="text-5xl text-center">127</p>
              </template>
            </card>
          </div>
          <div class="w-[50%]">
            <card>
              <template #header>
                <div class="text-center">
                  Total Team Members
                </div>
              </template>
              <template #default>
                <div class="m-auto">
                  <p class="text-5xl text-center">34</p>
                </div>
              </template>
            </card>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row m-8">
      <div class="w-full mr-3 basis-2/3">
        <Table/>
      </div>
      <div class="w-full mr-3 basis-1/3">
        <TechInfo/>
      </div>
    </div>
  </div>


</template>
<script lang="ts" setup>
import TopBar from "@/components/TopBar.vue";
import Team from "@/components/Team.vue";
import Card from '@/components/ui/Card.vue'
import {ref, computed} from 'vue';
import {useStore} from "vuex";
import Calendar from '@/components/ui/Calendar.vue'
import SearchInput from '@/components/ui/CustomInput.vue'
import Table from "@/components/ui/Table.vue";
import TechInfo from "@/components/ui/TechInfo.vue";

const store = useStore()

</script>

