function updateWeatherInfo(response){ 
let temperatureElement = document.querySelector("#temperature");
let temperature = response.data.temperature.current;
temperatureElement.innerHTML=Math.round(temperature);


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

let searchFormElement = document.querySelector("#search-form-input");
searchFormElement.addEventListener("submit",handleSearchSubmit);

searchTemp ("Toronto");