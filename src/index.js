import "./style.scss";
import { getWeather } from "./modules/appModel.js";
import { updateWeatherView } from "./modules/appView";

// https://api.openweathermap.org/data/2.5/weather?q=London&lang=sp&appid=c7cb5cbe6852930a001d50dd8e3d50b1

function initApp() {
  const formBox = document.getElementById("textbox");
  let form = document.getElementById("form");
  form.addEventListener("submit", async () => {
    event.preventDefault();
    const weatherData = await getWeather(formBox.value);
    updateWeatherView(weatherData);
  });
}

initApp();
