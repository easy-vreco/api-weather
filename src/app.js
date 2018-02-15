/* Variables para la API */ 
const predictionLink = document.getElementById('prediction');
const responseContainer = document.getElementById('initial-show'); 
const url = `https://api.darksky.net/forecast/d3aafabeb679f8b45c00be328ee36740/${latitudeCoord},${longitudeCoord}`;
let latitudeCoord, longitudeCoord;

let myUbication = function(positionF) {
  let output = document.getElementById('output');
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

let error = function(error) {
  window.alert('Tu navegador no soporta la API de geolocalizacion');
};

/* Método fetch */ 
predictionLink.addEventListener('click', function(event) {
  event.preventDefault();
  // responseContainer.innerHTML = '';
  fetch(url)
    .then(function(response) {
      console.log(response);
      return response.json();
    }).then(function(data) {
      // debugger;
      console.log(data.response);
      const currentlyData = data.currently;
      console.log(currentlyData);
      const windSpeed = currentlyData.windSpeed;
      const humidity = currentlyData.humidity;
      const indexUV = currentlyData.uvIndex;
      const pressure = currentlyData.pressure;

      let li = document.createElement('li');
      li.className = 'articleClass';
      // li.innerHTML = ``;
      li.innerText = windSpeed;
      li.innerHTML = humidity;
      li.innerHTML = indexUV;
      li.innerHTML = pressure;
      responseContainer.appendChild(li);
    })
    .catch(function(error) {
      console.log(error);
    }); 
});

// window.addEventListener('load', findRoute);
window.addEventListener('load', findMe);
document.addEventListener('ready', function(event) {
  event.preventDefault();
  findMe(event);
});
