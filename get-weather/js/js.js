
var latitude;
var longitude;
var dataWeather = {};
var date = new Date();
var day = date.getDay();

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
function getDay (day) {
    switch (day) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
    console.log('day :', day);
    return day;
}
function getDataWeather (data){
    dataWeather.temp = data.main.temp;
    dataWeather.icon =data.weather[0].icon;
    dataWeather.pressure =data.main.pressure;
    dataWeather.humidity = data.main.humidity;
    dataWeather.temp_min=data.main.temp_min;
    dataWeather.temp_max = data.main.temp_max;
    dataWeather.name = data.name;
    dataWeather.country = data.sys.country;
    dataWeather.weatherDes = data.weather[0].main;
    dataWeather.day = getDay(day);
    dataWeather.wind = data.wind.speed;
    dataWeather.fullDate = `${date.getDate()} \\ ${date.getMonth()} \\ ${date.getFullYear()}`
    return dataWeather;
}
var geolocationSuccess = function (pos) {
    latitude = pos.coords.latitude;
    longitude = pos.coords.longitude;
    getAPIWeather(  latitude,longitude);
    
    console.log('latitude :', latitude);
    console.log('longitude :', longitude);
   
    console.log("Your location is " + pos.coords.latitude + "°, " + pos.coords.longitude + "°.");
    setTimeout(function(){
        $('.current-position').addClass('js-show');

    },500)
};
// Function that will be called if the query fails
var geolocationFailure = function (err) {
    console.log("ERROR (" + err.code + "): " + err.message);
    console.log('hello');
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
        let dtWeather = getDataWeather(data);
        console.log('data :', data);        
        console.log('getDataWeather(data) :', getDataWeather(data));

        $('.name-position').html(dtWeather.name);
        $('.temp-min').html(dtWeather.temp_min);
        $('.temp-max').html(dtWeather.temp_max);
        $('.date-current').html(dtWeather.day);
        $('.full-date').html(dtWeather.fullDate);
        $('.wind').html(dtWeather.wind);
        $('.wet').html(dtWeather.humidity);
        $('.weather__temp').html(dtWeather.temp);
        $('.weather__type').html (dtWeather.weatherDes);
        

        // console.log('data.weather.icon :', data.weather.icon);
    })
}
