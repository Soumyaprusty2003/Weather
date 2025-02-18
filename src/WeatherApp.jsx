import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = new useState({
    city: "",
    description: "",
    feels_like: "",
    humidity: "",
    temp: "",
    temp_max: "",
    temp_min: "",
  });

  function addWeatherInfo(info) {
    setWeatherInfo(info);
  }
  return (
    <>
      <h1>Weather App</h1>
      <SearchBox addWeatherInfo={addWeatherInfo} />
      <InfoBox info={weatherInfo} />
    </>
  );
}
