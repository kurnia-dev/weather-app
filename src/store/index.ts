import { createStore } from "vuex";
import Location from "@/types/location";
import Weather from "@/types/weather";

export default createStore({
  state: {
    location: {} as Location,
    weather: {} as Weather,
  },
  mutations: {
    SET_LOCATION(state, payload: Location) {
      state.location = payload;
    },
    UPDATE_WEATHER(state, payload: Weather) {
      state.weather = payload;
    },
  },
});
