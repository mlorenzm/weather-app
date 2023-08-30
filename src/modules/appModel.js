const apiKey = "c7cb5cbe6852930a001d50dd8e3d50b1";
let city;
async function getWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=${apiKey}&units=metric`,
    { mode: "cors" }
  );
  const data = await response.json();
  return processData(data);
}

function processData(data) {
  const city = data.name;
  const country = data.sys.country;
  const temperature = data.main.temp;
  const weather = data.weather[0].main;
  return {
    city: city,
    country: country,
    temperature: temperature,
    weather: weather,
  };
}

function getNewCity() {
  const formBox = document.getElementById("textbox");
  if (formBox.value) {
    return formBox.value;
  }
}

function changeWeather() {
  let form = document.getElementById("form");
  form.addEventListener("submit", function () {
    event.preventDefault();
    city = getNewCity();
    console.log(city); //Esto posiblemente haya que cambiarlo de sitio, necesito refrescar tanto el nombre d ela ciudad como el tiempo cuando adquiero una ciudad nueva
  });
}

export { getWeather, changeWeather };
