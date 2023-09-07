<script lang="ts" setup>
// import SearchIcon from '@/assets/images/search.svg';
// import MenuButton from '@/assets/images/menu.svg';
import { Icon } from "@iconify/vue";
</script>

<template>
  <div>
    <!-- <img class="search-button" :src="SearchIcon" alt="" title="" /> -->
    <Icon icon="iconoir:search" width="28px" />
    <Icon icon="ri:menu-4-line" width="28px" />
    <!-- <img class="menu-button" :src="MenuButton" alt="" title="menu" /> -->
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
}
</style>
