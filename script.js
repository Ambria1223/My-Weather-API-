var APIKey = "82c2bc7258d0490f7b3770eb860cd3fc" ; 
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch (queryURL)
