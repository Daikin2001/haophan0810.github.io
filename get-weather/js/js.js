
var latitude;
var longitude;
 
var getErrorCode = function (err) {
    switch (err.code) {
        case err.PERMISSION_DENIED:
            return "PERMISSION_DENIED";
        case err.POSITION_UNAVAILABLE:
            return "POSITION_UNAVAILABLE";
        case err.TIMEOUT:
            return "TIMEOUT";
        default:
            return "UNKNOWN_ERROR";
    }
};

var geolocationSuccess = function (pos) {
    latitude = pos.coords.latitude;
    longitude = pos.coords.longitude;
    getAPIWeather(  latitude,longitude);
    
    console.log('latitude :', latitude);
    console.log('longitude :', longitude);
    console.log("Your location is " + pos.coords.latitude + "°, " + pos.coords.longitude + "°.");
};
// Function that will be called if the query fails
var geolocationFailure = function (err) {
    console.log("ERROR (" + err.code + "): " + err.message);
};

var updateLocation = function (position) {
    
    console.log("New position at: " + position.coords.latitude + ", " + position.coords.longitude);

}


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationFailure);
    console.log('latitude :', latitude);
    
} else {
    console.log("Geolocation is not supported by this browser.");
}

function getAPIWeather (latitude,longitude){
var url =`https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;
    
    console.log('url :', url);
    $.ajax({
        type: "GET",
        url:url,
        data:{someData:true}
    })
    .done (function(data){
        console.log('data :', data);
        $('.description__current .descript__temp').html(data.main.temp);
        console.log('data.main.temp :', data.main.temp);
    })
}
