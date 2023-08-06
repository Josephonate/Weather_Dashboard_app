var saveButton = $('#search');
var city = $('.city')
var temp = $('.temp')
var weatherDescription = $('.weatherDescription')
var feelsLike = $('.feelsLike')
var humidity = $('.humidity')
var windspeed = $('.windspeed')

    saveButton.click(function () {
        var city = $('#cityInput').val();
        var weatherAPI = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=83689c9844b7838e59ff072878e7fe48';
        console.log(city);

        fetch(weatherAPI)
            .then(function (repsonse) {
                return repsonse.json();
            })
            .then(function (data) {
                console.log(data);

            })
            .catch(function (error) {
                console.error('Error fetching weather data: ', error);
            });
    })


