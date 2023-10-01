import { getWeather } from "./appModel";
// function getNewCity() {
//   const formBox = document.getElementById("textbox");
//   return formBox.value;
// }

// let form = document.getElementById("form");
// form.addEventListener("submit", function () {
//   event.preventDefault();
//   let city = getNewCity();
//   const weather = getWeather(city);
//   console.log(weather);
// });

function updateWeatherView(data) {
  const main = document.getElementById("main");
  console.log(main);
  const text = `In ${data.cityName}, ${data.country}, there are ${data.temperature} ºC, and it's ${data.weather}`;
  const div = document.createElement("div");
  div.textContent = text;
  console.log(div);
  main.removeChild(main.lastChild);
  main.appendChild(div);
}

export { updateWeatherView };
