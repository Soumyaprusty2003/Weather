import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ addWeatherInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "";
  const API_KEY = "";

  function addWeather(info) {
    addWeatherInfo(info);
  }
  let getWeather = async () => {
    try {
      let weatherData = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await weatherData.json();
      let res = {
        city: city,
        temp: jsonResponse.main.temp,
        temp_max: jsonResponse.main.temp_max,
        temp_min: jsonResponse.main.temp_min,
        humidity: jsonResponse.main.humidity,
        feels_like: jsonResponse.main.feels_like,
        description: jsonResponse.weather[0].description,
      };
      return res;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      let newInfo = await getWeather();
      addWeather(newInfo);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        {error && <p style={{ color: "red" }}>No such place exit</p>}
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </>
  );
}
