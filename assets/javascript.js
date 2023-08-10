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
            data.list[0].main.humidity

        })
        .catch(function (error) {
            console.error('Error fetching weather data: ', error);
        });
})

// function showPrimaryCar(model){
//     $("#primaryCar").empty()
//     const primary = cars.filter((car) => car.model === model)[0];

//     const html = $(`
   
//    <div class="card col-12">
//     <div class="card-body">
//         <h5 class="card-title">${primary.name}</h5>
//         <p>Model: ${primary.model}</p>
//         <p>Make: ${primary.make}</p>
//         <p>Year: ${primary.year}</p>
//     </div>
//     </div>   
// `)

//     $("#primaryCar").append(html);
// }


// function showOtherCars(){
//     $("#otherCar").empty();
//     for (let i = 0; i < cars.length; i++) {
//         if(i % 2 === 0){
//          const car = cars[i];

//          const html = $(`
//             <div class="col">
//                 <div class="card">
//                     <div class="card-body">
//                         <h5 class="card-title">${car.name}</h5>
//                         <p>Model: ${car.model}</p>
//                         <p>Make: ${car.make}</p>
//                         <p>Year: ${car.year}</p>
//                     </div>
//                 </div>   
//             </div>
//             `);

//             $("#otherCars").append(html);
//         }
//     }
// }
