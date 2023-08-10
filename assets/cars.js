const cars = [
    {
        "make": "Toyota",
        "model": "Corolla",
        "year": 2023,
        "mileage": "10,000",
        "color": "White",
        "name": "My Toyota Corolla"
    },
    {
        "make": "Honda",
        "model": "Civic",
        "year": 2022,
        "mileage": "20,000",
        "color": "Black",
        "name": "My Honda Civic"
    },
    {
        "make": "Tesla",
        "model": "Model 3",
        "year": 2021,
        "mileage": "30,000",
        "color": "Red",
        "name": "My Tesla Model 3"
    },
    {
        "make": "Ford",
        "model": "Mustang",
        "year": 2020,
        "mileage": "40,000",
        "color": "Blue",
        "name": "My Ford Mustang"
    },
    {
        "make": "Chevrolet",
        "model": "Camaro",
        "year": 2019,
        "mileage": "50,000",
        "color": "Yellow",
        "name": "My Chevrolet Camaro"
    },
    {
        "make": "Dodge",
        "model": "Challenger",
        "year": 2018,
        "mileage": "60,000",
        "color": "Green",
        "name": "My Dodge Challenger"
    },
    {
        "make": "GMC",
        "model": "Sierra 1500",
        "year": 2017,
        "mileage": "70,000",
        "color": "Silver",
        "name": "My GMC Sierra 1500"
    },
    {
        "make": "Ram",
        "model": "1500",
        "year": 2016,
        "mileage": "80,000",
        "color": "Grey",
        "name": "My Ram 1500"
    },
    {
        "make": "Toyota",
        "model": "Tacoma",
        "year": 2015,
        "mileage": "90,000",
        "color": "Purple",
        "name": "My Toyota Tacoma"
    },
    {
        "make": "Honda",
        "model": "Ridgeline",
        "year": 2014,
        "mileage": "100,000",
        "color": "Pink",
        "name": "My Honda Ridgeline"
    },
    {
        "make": "Tesla",
        "model": "Cybertruck",
        "year": 2023,
        "mileage": 0,
        "color": "Brown",
        "name": "My Tesla Cybertruck"
    },
    {
        "make": "Ford",
        "model": "F-150",
        "year": 2022,
        "mileage": "10,000",
        "color": "Orange",
        "name": "My Ford F-150"
    },
    {
        "make": "Chevrolet",
        "model": "Silverado 1500",
        "year": 2021,
        "mileage": "20,000",
        "color": "Teal",
        "name": "My Chevrolet Silverado 1500"
    },
    {
        "make": "Dodge",
        "model": "Ram 1500",
        "year": 2020,
        "mileage": "30,000",
        "color": "Maroon",
        "name": "My Dodge Ram 1500"
    }
]

function showPrimaryCar(model){
    $("#primaryCar").empty()
    const primary = cars.filter((car) => car.model === model)[0];

    const html = $(`
   
   <div class="card col-12">
    <div class="card-body">
        <h5 class="card-title">${primary.name}</h5>
        <p>Model: ${primary.model}</p>
        <p>Make: ${primary.make}</p>
        <p>Year: ${primary.year}</p>
    </div>
    </div>   
`)

    $("#primaryCar").append(html);
}


function showOtherCars(){
    $("#otherCar").empty();
    for (let i = 0; i < cars.length; i++) {
        if(i % 2 === 0){
         const car = cars[i];

         const html = $(`
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${car.name}</h5>
                        <p>Model: ${car.model}</p>
                        <p>Make: ${car.make}</p>
                        <p>Year: ${car.year}</p>
                    </div>
                </div>   
            </div>
            `);

            $("#otherCars").append(html);
        }
    }
}