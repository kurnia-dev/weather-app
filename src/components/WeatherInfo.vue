<script setup lang="ts">
import SunnyRain from "@/assets/images/sunny-rain.svg";
import Sunny from "@/assets/images/sunny.svg";
import PartlySunny from "@/assets/images/partly-sunny.svg";
import Rainny from "@/assets/images/rainny.svg";
import getWeather from "@/tools/getWeather";
import getIsoTime from "@/tools/getIsoTime";
import { computed, watch } from "vue";
import { useStore } from "vuex";
const store = useStore();

const location = computed(() => store.state.location);
const isoTime = getIsoTime();
watch(location, () => {
  if (location.value.lat) {
    getWeather(location.value.lat, location.value.long, isoTime).then(
      (newWeather) => {
        console.log(newWeather);
        store.commit("UPDATE_WEATHER", newWeather);
      }
    );
  }
});

const weatherStatus = [
  {
    name: "Sunny",
    image: Sunny,
  },
  {
    name: "Sunny Rain",
    image: SunnyRain,
  },
  {
    name: "Partly Sunny",
    image: PartlySunny,
  },
  {
    name: "Rainny",
    image: Rainny
  },
  {
    name: "Heavy Rain",
    image: {}
  },
];

const weather = computed(() => store.state.weather);
const weatherStatusCode = computed(() => {
  const rain = weather.value.rain;
  const cloudy = weather.value.cloudcover;

  if (cloudy > 10) return 0;

  switch (true) {
    case rain == 0:
      return 1;
    case rain <= 2.5:
      return 2;
    case rain <= 7.6:
      return 3;
    case rain <= 25:
      return 4;
    case rain > 25:
      return 5;
    default:
      return 99;
  }
});
</script>
<template>
  <div class="weather">
    <img alt="" class="weather__icon" :src="weatherStatus[weatherStatusCode]?.image" />
    <div>
      <span class="weather__temperature"> {{ weather.temperature }}</span>
      <span class="weather__info"> {{ weatherStatus[weatherStatusCode]?.name }} </span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/scss/index.scss";
@import "~rfs/scss";
.weather {
  display: flex;
  align-items: center;
  @include rfs(10px, gap);
  color: $main-text-color;

  .weather__icon {
    width: 60%;
    aspect-ratio: 1/1;
  }

  div {
    display: flex;
    flex-direction: column;

    .weather__temperature {
      font-size: 60px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      display: flex;
      align-items: flex-start;
      gap: 2px;
    }

    .weather__temperature::after {
      content: "\00B0 C";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      color: $secondary-text-color;
      line-height: normal;
    }

    .weather__info {
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}
</style>
