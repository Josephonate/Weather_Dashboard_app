var weather = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={83689c9844b7838e59ff072878e7fe48}";
// var apiKey ="83689c9844b7838e59ff072878e7fe48";
fetch(weather)
.then(function(repsonse){
    return repsonse;
})
.then(function(data){
    console.log(data);
})

function saveCity(){

}