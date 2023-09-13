import { getWeather } from "./appModel";
function getNewCity() {
  const formBox = document.getElementById("textbox");
  return formBox.value;
}

let form = document.getElementById("form");

form.addEventListener("submit", function () {
  event.preventDefault();
  let city = getNewCity();
});

function createText() {}

export { getNewCity };
