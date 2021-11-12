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
      .then((data) => console.log(data));
  },
  displayWeather: function (data) {},
};
