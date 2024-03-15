function updateWeatherInfo(response){ 
 
let temperatureElement = document.querySelector("#temperature");
temperature = response.data.temperature.current;
temperatureElement.innerHTML=Math.round(temperature);

let descriptionElement=document.querySelector("#description");
descriptionElement.innerHTML=response.data.condition.description;
let humdityElement = document.querySelector("#humidity");
humdityElement.innerHTML = `${response.data.temperature.humidity}%`;
let windElement = document.querySelector ("#wind");
windElement.innerHTML=`${response.data.wind.speed}km/h`;
let daytimeElement=document.querySelector("#daytime");
let date = new Date(response.data.time *1000);
daytimeElement.innerHTML= formatDate(date);
let iconElement = document.querySelector("#icon");
 icon.innerHTML=`<img src="${response.data.condition.icon_url}" class="icon"/>`;
}

function formatDate(date){
    let minutes=date.getMinutes();
    let hours=date.getHours();
    let days =["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
   let day=days[date.getDay()]; 
   if (minutes <10) { minutes = `0${minutes}`};
    return`${day} ${hours} ${minutes}`;
}
function searchTemp(city){
let apiKey = "c794c14abfa5138e0adb4dof9fffect7";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(updateWeatherInfo);                                                                                            
}


function handleSearchSubmit(event){
    event.preventDefault();
    let searchCity = document.querySelector("#search-city");
   let cityElement = document.querySelector("#city");
   cityElement.innerHTML = searchCity.value;
   searchTemp(searchCity.value);
}

function displayForecast(){

let days=["Fri", "Sat", "Sun", "Mon", "Tue"];
let forecastHtml="";
days.forEach(function(day){
forecastHtml=forecastHtml +`
<div class="weather-forecast-day">
        <div class="weather-forecast-date">${day}</div>
     <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/118/054/original/Weather-PNG.png?1709847742" width="42px"/>
            <div class="weather-forecast-temp"> <span class = "weather-temp-max">18°</span><span class="weather-temp-min">5°</span></div>
          </div>
        </div> `;
});
let forecastElement=document.querySelector("#forecast");
forecastElement.innerHTML=forecastHtml;
}


let searchFormElement = document.querySelector("#search-form-input");
searchFormElement.addEventListener("submit",handleSearchSubmit);
searchTemp(city);

displayForecast();