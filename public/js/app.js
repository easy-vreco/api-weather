'use strict';

var initFunction = function initFunction() {
  var weather = function weather(data) {
    var windContainer = $('#wind-container');
    var humidityContainer = $('#humidity-container');
    var uvContainer = $('#uv-container');
    var pressureContainer = $('#pressure-container');
    var placeContainer = $('#place-container');
    var predictionBtn = $('#prediction-btn');
    var todayShow = data.currently;
    console.log(todayShow);

    // Crear mis elementos 
    var temperatureToday = $('<h4 class="card-title text-center white">' + todayShow.temperature + '\xB0</h4>').appendTo(placeContainer);
    var windToday = $('<div class="col-auto mr-auto white">Wind:</div> <div class="col-auto white">' + todayShow.windSpeed + '</div><br>').appendTo(windContainer);
    var humidityToday = $('<div class="col-auto mr-auto white">Humidity:</div> <div class="col-auto white">' + todayShow.humidity + '</div><br>').appendTo(humidityContainer);
    var uvToday = $('<div class="col-auto mr-auto white">UV Index:</div> <div class="col-auto white">' + todayShow.uvIndex + '</div>').appendTo(uvContainer);
    var presurreToday = $('<div class="col-auto mr-auto white">Pressure:</div> <div class="col-auto white">' + todayShow.pressure + '</div>').appendTo(pressureContainer);

    // Predicciones de la semana
    predictionBtn.on('click', function () {
      var cardBodyContainer = $('#card-body-container');
      var cardBodyInitial = $('#card-body-initial');
      var weekDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
      var days = data.daily.data;
      console.log(days);
      cardBodyInitial.addClass('invisible');
      cardBodyContainer.removeClass('invisible');
    });
  };

  // debugger;
  var myUbication = function myUbication(position) {
    var latitudeCoord = void 0,
        longitudeCoord = void 0;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        latitudeCoord = position.coords.latitude;
        longitudeCoord = position.coords.longitude;
        console.log(latitudeCoord, longitudeCoord);
        var proxy = 'https://cors-anywhere.herokuapp.com/';
        var url = 'https://api.darksky.net/forecast/d3aafabeb679f8b45c00be328ee36740/' + latitudeCoord + ',' + longitudeCoord + '?lang=es';

        $.ajax({
          url: proxy + url,
          success: weather
        });
      });
    } else {
      windows.alert('Tu navegador no soporta Geolocalización');
    }
  };
  myUbication();
};

window.onload = initFunction;