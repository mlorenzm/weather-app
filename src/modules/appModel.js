const apiKey = "c7cb5cbe6852930a001d50dd8e3d50b1";

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

export { getWeather };
