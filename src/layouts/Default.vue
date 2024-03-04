<template>


  <div class="main-container">
    <sidebar>
      <div class="flex flex-col gap-8">
        <div>
          <router-link :to="`/Home`">
            <Icon icon-name="Home"/>
          </router-link>
        </div>
        <router-link :to="`/Tasks`">
          <Icon icon-name="Overview"/>
        </router-link>
        <router-link :to="`/Tasks`">
          <Icon icon-name="Calendar"/>
        </router-link>
        <router-link :to="`/Tasks`">
          <Icon icon-name="Chart"/>
        </router-link>
        <router-link :to="`/Tasks`">
          <Icon icon-name="Plus"/>
        </router-link>
      </div>

      <template #userSettings>
        <router-link to="/">
          <Icon icon-name="Settings"/>
        </router-link>
        <router-link to="/">
          <Icon icon-name="LogOut"/>
        </router-link>
      </template>
    </sidebar>
    <router-view></router-view>

  </div>


</template>

<script lang="ts" setup>
import Sidebar from "@/components/Sidebar.vue";
import Icon from "@/components/ui/Icon.vue";
import {ref} from "vue";

const sideBarItems = ref<string[]>(['Home', 'Overview', 'Calendar', 'Chart', 'Plus'])
</script>

<style scoped>

.main-container {
  display: flex;
}


</style>