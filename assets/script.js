var APIKey = "82c2bc7258d0490f7b3770eb860cd3fc" ; 
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch (queryURL)

function fetchCoords(search) {
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
  
    fetch(queryURL)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (!data[0]) {
          alert('Location not found');
        } else {
          appendToHistory(search);
          fetchWeather(data[0]);
        }
      })
      .catch(function (err) {
        console.error(err);
      });
  }

  const cityInput = document.getElementById("city-input");
console.log(cityInput.value); // This will log the current value of the input field

function handleKeyDown(event); {
  
  if (event.key === 'Enter')
  console.log( 'Enter key pressed!');

}