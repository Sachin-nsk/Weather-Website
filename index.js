const apikey = "4b1c90b87b6262b1b1df95c426ecb12b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.getElementById("w-icon");

var oldClass = "fa-solid fa-cloud-moon-rain fa-5x";





async function CheckWeather(city) {

    const response = await fetch(apiUrl + `${city}` + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp - 273) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + " Km/hr";
    document.querySelector(".pressure").innerHTML = data.main.pressure + " hPa";

    if (data.weather[0].main == 'Clear') {
        weatherIcon.className = "fa-solid fa-cloud fa-5x";
    }
    else if (data.weather[0].main == 'Drizzle') {

        weatherIcon.className = "fa-solid fa-cloud-rain fa-5x";
    }
    else if (data.weather[0].main == 'Rain') {

        weatherIcon.className = "fa-solid fa-cloud-showers-heavy fa-5x";
    }

    else if (data.weather[0].main == 'Mist') {

        weatherIcon.className = "fa-solid fa-smog fa-5x";

    }
    else if (data.weather[0].main == 'Clouds') {

        weatherIcon.className = "fa-solid fa-cloud-bolt fa-5x";

    }
}

searchBtn.addEventListener("click", () => {
    CheckWeather(searchBox.value);
})
