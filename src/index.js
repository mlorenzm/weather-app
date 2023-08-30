import "./style.scss";
import { getWeather, changeWeather } from "./modules/appModel.js";

// https://api.openweathermap.org/data/2.5/weather?q=London&lang=sp&appid=c7cb5cbe6852930a001d50dd8e3d50b1
function initApp() {
  changeWeather();
}

initApp();
