var saveButton = $('#search');

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
            $("#weatherDayOne").empty()
            const html = $(`
               <div class="card col-12">
                    <div class="card-body">
                        <h5 class="card-title">${data.city.name} ${data.list[3].dt_txt.split(' ')[0]} ${data.list[3].weather[0].description}</h5>
                        <p>Temp: ${data.list[3].main.temp}&#8457</p>
                        <p>Wind: ${data.list[3].wind.speed} MPH</p>
                        <p>humidity: ${data.list[3].main.humidity}%</p>
                    </div>
                </div>
            `)

            $("#weatherDayOne").append(html);

            $("#otherDays").empty();
            for (let i = 1; i < data.list.length; i++) {
                if (i % 8 === 0) {
                    const newDay = data.list[i];
                    const htmlOtherDay = $(`
             <div class="col">
                 <div class="card">
                     <div class="card-body">
                     <h5 class="card-title">${newDay.dt_txt.split(' ')[0]} ${newDay.weather[0].description}</h5>
                     <p>Temp: ${newDay.main.temp}&#8457</p>
                     <p>Wind: ${newDay.wind.speed} MPH</p>
                     <p>humidity: ${newDay.main.humidity}%</p>
                 </div>
                     </div>
                 </div>   
             </div>
             `);
                    $("#otherDays").append(htmlOtherDay);
                }
            }
        })
        .catch(function (error) {
            console.error('Error fetching weather data: ', error);
        });

})
