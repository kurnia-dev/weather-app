import axios from "axios";
import Weather from "@/types/weather";

function getWeather(
  lat: number,
  long: number,
  isoTime: string
): Promise<Weather> {
  const WEATHER_API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,rain,windspeed_10m,cloudcover`;

  return new Promise<Weather>((resolve, reject) => {
    axios
      .get(WEATHER_API_URL)
      .then((res) => {
        const times: string[] = res.data.hourly.time;
        const rains: number[] = res.data.hourly.rain;
        const temperatures: number[] = res.data.hourly.temperature_2m;
        const humidities: number[] = res.data.hourly.relativehumidity_2m;
        const winds: number[] = res.data.hourly.windspeed_10m;
        const cloudCovers = res.data.hourly.cloudcover;
        const todayIndex: number = times.indexOf(isoTime);
        const weather: Weather = {
          time: isoTime,
          temperature: temperatures[todayIndex],
          rain: rains[todayIndex],
          humidity: humidities[todayIndex],
          wind: winds[todayIndex],
          cloudcover: cloudCovers[todayIndex],
        };

        resolve(weather);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default getWeather;
