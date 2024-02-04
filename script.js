const apiKey = "9def8d5d299f242614a169babf841cc4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{

        var data = await response.json();

    // getting the info on the weather from the api by linking it.
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";


    // Getting the images to display according to the weather
    if(data.weather[0].main == "Clouds"){
       weatherIcon.src = "/images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "/images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "/images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "/images/cdrizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "/images/mist.png";
    }

    // styling so that it displays info only when the user enters the city

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
    

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();