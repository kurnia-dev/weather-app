import Location from "@/types/location";
import axios from "axios";

function getUserLocation(): Promise<Location> {
  return new Promise<Location>((resolve) => {
    let lat: number, long: number, city: string, country: string;

    navigator.geolocation.getCurrentPosition((pos) => {
      lat = pos.coords.latitude;
      long = pos.coords.longitude;

      const LOCATION_API_URL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=id`;
      axios.get(LOCATION_API_URL).then((res) => {
        city = res.data.city;
        country = res.data.countryName;

        const location: Location = {
          lat,
          long,
          city,
          country,
        };

        resolve(location);
      });
    });
  });
}

export default getUserLocation;
