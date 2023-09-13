import "./style.scss";
import { getWeather } from "./modules/appModel.js";
import { getNewCity } from "./modules/appView";

// https://api.openweathermap.org/data/2.5/weather?q=London&lang=sp&appid=c7cb5cbe6852930a001d50dd8e3d50b1
function initApp() {
  getWeather("San Francisco");
}

initApp();
