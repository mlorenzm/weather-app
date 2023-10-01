const apiKey = "c7cb5cbe6852930a001d50dd8e3d50b1";

async function fetchWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=${apiKey}&units=metric`,
    { mode: "cors" }
  );
  try {
    const data = await response.json();
    const obj = {
      cityName: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      weather: data.weather[0].description,
    };
    return obj;
  } catch (error) {
    alert("Invalid city");
  }
}

async function getWeather(city) {
  const res = await fetchWeather(city);
  return res;
}

export { getWeather };
