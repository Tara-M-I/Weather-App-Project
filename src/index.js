function handleSearchSubmit(event){
    event.preventDefault();
    let searchCity = document.querySelector("#search-city");
   let cityElement = document.querySelector("#city");
   cityElement.innerHTML = searchCity.value;
}

let searchFormElement = document.querySelector("#search-form-input");
searchFormElement.addEventListener("submit",handleSearchSubmit);