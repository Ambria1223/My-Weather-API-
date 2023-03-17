var APIKey = "82c2bc7258d0490f7b3770eb860cd3fc" ; 
var city;
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}" + city + "&appid=" + APIKey;
fetch (queryURL);

function fetchCoords(search) {
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}" + city + "&appid=" + APIKey;
  
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

  const responsePromise = fetch(queryURL);


  const cityInput = document.getElementById('city-input');
  const submitButton = document.getElementById('submit-button');
  let city = '';
  
  submitButton.addEventListener('click', () => {
    city = cityInput.value;
    console.log('City:', city);
  });
  

