const apiKey = "c7cb5cbe6852930a001d50dd8e3d50b1";

async function fetchWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=${apiKey}&units=metric`,
    { mode: "cors" }
  );
  if (response.status !== 200) {
    // call View function to 404
    //console.log("404");
  } else {
    const data = await response.json();
    const obj = {
      cityName: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      weather: data.weather[0].main,
    };
    return obj;
  }
}

async function getWeather(city) {
  const res = await fetchWeather(city);
  console.log(res);
}

export { getWeather };
