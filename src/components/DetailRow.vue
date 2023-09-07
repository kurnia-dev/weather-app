<script lang="ts" setup>
import rainFall from "@/assets/images/rainfall.svg";
import wind from "@/assets/images/wind.svg";
import humidity from "@/assets/images/humidity.svg";
import { computed, watch } from "vue";
import store from "@/store";
import { ref } from "vue";

const weather = computed(() => store.state.weather);
const details = ref([
  {
    name: "Rain Fall",
    value: "" as string,
    image: rainFall,
  },
  {
    name: "Wind",
    value: "" as string,
    image: wind,
  },
  {
    name: "Humidity",
    value: "" as string,
    image: humidity,
  },
]);

watch(weather, () => {
  details.value[0].value = weather.value.rain + "cm";
  details.value[1].value = weather.value.wind + "km/h";
  details.value[2].value = weather.value.humidity + "%";

  console.log(details.value);
});
</script>
<template>
  <div class="detail">
    <div class="detail__item" v-for="detail in details" :key="detail.value">
      <img :src="detail.image" alt="" />
      <div>
        <span>{{ detail.name }}</span>
        <span>{{ detail.value }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.detail {
  display: flex;
  flex-direction: column;
  gap: 8px;

  .detail__item {
    display: flex;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 10px;
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.36);
    align-items: center;

    img {
      width: 32px;
      height: 32px;
    }

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
