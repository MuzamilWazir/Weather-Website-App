const apiKey = "c97d53830e76be0b4a507ecff74700f5";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=matric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

const weathericon = document.querySelector(".w-icon");
async function checkWeather(city) {
  const respone = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (respone.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await respone.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp - 273.15) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    if (data.weather[0].main == "Clouds") {
      weathericon.src = "./images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "./images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weathericon.src = "./images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weathericon.src = "./images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weathericon.src = "./images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
  }
  document.querySelector(".error").style.display = "none";
}
searchbox.addEventListener("click", () => {
  checkWeather(searchbox.value);
});
