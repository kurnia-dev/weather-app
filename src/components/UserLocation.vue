<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import Location from "../types/location";
import getCurrentTime from "../tools/getCurrentTime";
import getUserLocation from "@/tools/getUserLocation";
import { Icon } from "@iconify/vue";
import { useStore } from "vuex";
const store = useStore();

const userLocation = ref<Location>();
onBeforeMount(() => {
  getUserLocation().then((location) => {
    userLocation.value = location
    store.commit("SET_LOCATION", location)
  });
})
const currentTime: string = getCurrentTime();
</script>
<template>
  <div class="container">
    <div class="user-location">
      <Icon icon="ion-location-outline" width="26px" />
      {{ userLocation?.city }}, {{ userLocation?.country }}
    </div>
    <div class="time">
      <Icon icon="bx:calendar" width="26px" />
      {{ currentTime }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/index.scss";
@import "~rfs/scss";
.user-location {
  color: $main-text-color;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 16px;
  // display: flex;
  // flex-direction: row;
  // align-items: center;
  // gap: 0.5em;
}

.time {
  color: $secondary-text-color;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
