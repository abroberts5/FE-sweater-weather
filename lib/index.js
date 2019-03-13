
var Forecast = new XMLHttpRequest();
var url = 'https://sweater-weather-a.herokuapp.com/api/v1/forecast?location=denver,co';
Forecast.open("GET", url);
Forecast.send();

Forecast.onreadystatechange = function(){
  if(this.readyState==4 && this.status==200){
    console.log(Forecast.responseText)
  };
};

// $(document).ready(function() {
//   var api_url = 'https://sweater-weather-a.herokuapp.com/api/v1/forecast?location=denver,co'
//
//   $( ".btn" ).click(function(){
//     $.ajax({
//       url: api_url,
//       type: "GET",
//       success: function(result) {
//         console.log(result);
//       },
//       error: function(error){
//         console.log('Error ${error}')
//       }
//   });
// });
