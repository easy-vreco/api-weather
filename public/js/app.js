'use strict';

/* Variables para la API */
var predictionLink = document.getElementById('prediction');
var responseContainer = document.getElementById('initial-show');
var url = 'https://api.darksky.net/forecast/d3aafabeb679f8b45c00be328ee36740/' + latitudeCoord + ',' + longitudeCoord;
var latitudeCoord = void 0,
    longitudeCoord = void 0;

var myUbication = function myUbication(positionF) {
  var output = document.getElementById('output');
  latitudeCoord = positionF.coords.latitude;
  longitudeCoord = positionF.coords.longitude;

  // output.innerHTML = `Latitud: ${latitudeCoord} <br>Longitud: ${longitudeCoord}`;
};

function findMe(event) {
  event.preventDefault();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(myUbication, error);
  }
}

var error = function error(_error) {
  window.alert('Tu navegador no soporta la API de geolocalizacion');
};

/* Método fetch */
predictionLink.addEventListener('click', function (event) {
  event.preventDefault();
  // responseContainer.innerHTML = '';
  fetch(url).then(function (response) {
    console.log(response);
    return response.json();
  }).then(function (data) {
    // debugger;
    console.log(data.response);
    var currentlyData = data.currently;
    console.log(currentlyData);
    var windSpeed = currentlyData.windSpeed;
    var humidity = currentlyData.humidity;
    var indexUV = currentlyData.uvIndex;
    var pressure = currentlyData.pressure;

    var li = document.createElement('li');
    li.className = 'articleClass';
    // li.innerHTML = ``;
    li.innerText = windSpeed;
    li.innerHTML = humidity;
    li.innerHTML = indexUV;
    li.innerHTML = pressure;
    responseContainer.appendChild(li);
  }).catch(function (error) {
    console.log(error);
  });
});

// window.addEventListener('load', findRoute);
window.addEventListener('load', findMe);
document.addEventListener('ready', function (event) {
  event.preventDefault();
  findMe(event);
});