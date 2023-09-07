<script setup lang="ts">
import UserLocation from "@/components/UserLocation.vue";
import WeatherInfo from "@/components/WeatherInfo.vue";
import AppHeader from "@/components/AppHeader.vue";
import DetailRow from "@/components/DetailRow.vue";
</script>
<template>
  <div id="home">
    <AppHeader />
    <UserLocation />
    <WeatherInfo />
    <DetailRow />
  </div>
</template>
<style lang="scss">
#home {
  padding: 26px 32px;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
}
</style>
