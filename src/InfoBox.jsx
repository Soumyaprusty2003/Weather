import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const initUrl =
    "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.jpg?s=612x612&w=is&k=20&c=DJLFJx9p-nbIctnbojqRq20Ykb8OoAiysD23LxbaXLk=";
  const HOT_URL =
    "https://media.istockphoto.com/id/1204371996/photo/tree-foliage-in-beautiful-morning-light-with-sunlight-in-summer.jpg?s=612x612&w=0&k=20&c=fKNU5qSN-NzFYVLtw_Q5ojY-j-DeoOYHpsSA23UJMlk=";
  const COLD_URL =
    "https://media.istockphoto.com/id/1797572797/photo/male-trekker-hiker-standing-looking-down-at-village-houses-and-himalaya-mountains-in-distance.jpg?s=612x612&w=0&k=20&c=d81Nz8tA72b3bK6UXUxMabSc9uzrwZgpwUz5jLh0CzY=";
  const RAIN_URL =
    "https://media.istockphoto.com/id/1127768977/photo/heavy-spring-rain-in-the-countryside.jpg?s=612x612&w=0&k=20&c=vFIe5IBW47MDNSFXD62UeL7EwrR80fMO-pNRct1ge7k=";

  return (
    <>
      <div className="parent">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 19
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 19 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>feels_like = {info.feels_like}&deg;C</p>
              <p>max_temp = {info.temp_max}&deg;C</p>
              <p>min_temp = {info.temp_min}&deg;C</p>
              <p>Description = {info.description}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
