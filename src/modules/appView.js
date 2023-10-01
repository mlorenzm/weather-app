import { getWeather } from "./appModel";

function updateWeatherView(data) {
  const main = document.getElementById("main");

  const text = `In ${data.cityName}, ${data.country}, there are ${data.temperature} ºC, and it's ${data.weather}`;
  const div = document.createElement("div");
  div.textContent = text;
  main.removeChild(main.lastChild);
  main.appendChild(div);
}

export { updateWeatherView };
