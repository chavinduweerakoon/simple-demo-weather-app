let weather = {
  apiKey: "2143858ddf41a7238fc0f7baf85d2159",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "http://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity : " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind Speed : " + speed + "km/h";
  },
  searchWeather: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

//event listener for search button
document.querySelector(".search button").addEventListener("click", function () {
  weather.searchWeather();
});
