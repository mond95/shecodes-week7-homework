// FOURTH STEP:
function populateScreen(response) {
  // to see all the data returned for that city
  console.log(response.data);

  // to populate the city name with the one from the API to avoid uppercase errors etc
  let cityElement = document.querySelector("#city");
  city.innerHTML = response.data.city;

  // populating the temperature
  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = `${temperature}°c`;

  // populating the weather icon
  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="icon">`;

  // populating the weather description
  let weatherDescriptionElement = document.querySelector(
    "#weather-description"
  );
  weatherDescriptionElement.innerHTML = response.data.condition.description;
}

// THIRD STEP:
// get the API data which uses the user's inputted city as the query and then call the populateScreen function
function getCityData(city) {
  let apiKey = "145at3bd88ddc4bf6od1483d03f4ef43";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query={${city}}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(populateScreen);
}

// SECOND STEP:
// Getting what the user has typed in the search input once the 'submit' has happened and then putting it into another function 'getCityData'
function getSearchValue(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  //   console.log(searchInput.value);
  getCityData(searchInput.value);
}

// FIRST STEP:
// Targeting the search form so that we can say whatever is typed in there and then submitted will trigger the action which will
// send that typed value i.e. the requested city into the API
// which will return data relevant to that city which we can choose to populate the screen
let searchFormElement = document.querySelector("#search-form");
// checing selected correrct element
// console.log(searchFormElement);

searchFormElement.addEventListener("submit", getSearchValue);

getCityData("London");
