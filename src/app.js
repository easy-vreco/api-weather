let initFunction = () => {
  let weather = data => {
    let windContainer = $('#wind-container');
    let humidityContainer = $('#humidity-container');
    let uvContainer = $('#uv-container');
    let pressureContainer = $('#pressure-container');
    let placeContainer = $('#place-container');
    let predictionBtn = $('#prediction-btn');
    let todayShow = data.currently;
    console.log(todayShow);
    
    // Crear mis elementos 
    let temperatureToday = $(`<h4 class="card-title text-center white">${todayShow.temperature}°</h4>`).appendTo(placeContainer);
    let windToday = $(`<div class="col-auto mr-auto white">Wind:</div> <div class="col-auto white">${todayShow.windSpeed}</div><br>`).appendTo(windContainer);
    let humidityToday = $(`<div class="col-auto mr-auto white">Humidity:</div> <div class="col-auto white">${todayShow.humidity}</div><br>`).appendTo(humidityContainer);
    let uvToday = $(`<div class="col-auto mr-auto white">UV Index:</div> <div class="col-auto white">${todayShow.uvIndex}</div>`).appendTo(uvContainer);
    let presurreToday = $(`<div class="col-auto mr-auto white">Pressure:</div> <div class="col-auto white">${todayShow.pressure}</div>`).appendTo(pressureContainer);
  
    // Predicciones de la semana
    predictionBtn.on('click', function() {
      let cardBodyContainer = $('#card-body-container');
      let cardBodyInitial = $('#card-body-initial');
      let weekDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
      cardBodyInitial.addClass('invisible');
      cardBodyContainer.removeClass('invisible');
      let days = data.daily.data;
      console.log(days);
      
      $.each(weekDays, function(temperatureI) {
        
      });
      
    });
  };

  // debugger;
  let myUbication = (position) => {
    let latitudeCoord, longitudeCoord;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        latitudeCoord = position.coords.latitude;
        longitudeCoord = position.coords.longitude;
        console.log(latitudeCoord, longitudeCoord);
        let proxy = 'https://cors-anywhere.herokuapp.com/';
        let url = `https://api.darksky.net/forecast/d3aafabeb679f8b45c00be328ee36740/${latitudeCoord},${longitudeCoord}?lang=es`;
      
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

