const apikey ="aec13ecbf08caa571e67cf55069e9a3a";
const apiUrlKey = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputBox = document.querySelector(".search input");
const button = document.querySelector(".search button");
const weatherImg = document.querySelector(".weather_img");
let imgBody = document.body;
const weatherBox = document.querySelector(".weather");
async function checkWeather(city) {
    const response = await fetch(apiUrlKey + city +`&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".erros").style.display = "block";
        weatherBox.style.display = "none";
    }
    else{
            var data = await response.json();
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  +'°C';
            document.querySelector(".humidity").innerHTML = data.main.humidity +'%';
            document.querySelector(".wind").innerHTML = data.wind.speed +' Km/h';
            if(data.weather[0].main == "Clouds"){
                weatherImg.src = "images/clouds.png";
                imgBody.style.backgroundImage = `url("skys/clouds.jpg")`;
            }
            else if(data.weather[0].main == "Rain"){
                weatherImg.src = "images/rain.png";
                imgBody.style.backgroundImage = `url("skys/sky bad.jpg")`;
            }
            else if(data.weather[0].main == "Clear"){
                weatherImg.src = "images/clear.png";
                imgBody.style.backgroundImage = `url("skys/troiquang.jpg")`;
            }
            else if(data.weather[0].main == "Snow"){
                weatherImg.src = "images/snow.png";
                imgBody.style.backgroundImage = `url("skys/snow.jpg")`;
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherImg.src = "images/drizzle.png";
                imgBody.style.backgroundImage = `url("skys/Drizzle.jpg")`;
            }
            else{
                weatherImg.src = "images/mist.png";
                imgBody.style.backgroundImage = `url("skys/mist.jpg")`;
            }
            document.querySelector(".erros").style.display = "none";
            weatherBox.style.display = "block";
        }
    }
function handlekeyPress(event){
        if(event.key === "Enter"){
            checkWeather(inputBox.value);
            weatherBox.style.display = "block";
        }
    }
button.addEventListener("click", ()=>{
    if(inputBox.value == ""){
        alert("You must write the name of the city.")
    }
    else{
        checkWeather(inputBox.value);
        weatherBox.style.display = "block";
    }

    })

    inputBox.addEventListener("keydown", handlekeyPress);


