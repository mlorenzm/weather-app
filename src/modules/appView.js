import { getWeather } from "./appModel";

function updateWeatherView(data) {
  const main = document.getElementById("main");

  const text = `In <span id='city-name'>${data.cityName}, ${data.country}</span> there are ${data.temperature}ºC, and it's <u>${data.weather}</u>`;
  const div = document.createElement("div");
  div.innerHTML = text;
  div.setAttribute("id", "textID");
  main.removeChild(main.lastChild);
  main.appendChild(div);
}

export { updateWeatherView };
