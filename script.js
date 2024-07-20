fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((result) => {
        for (let i = 0; i < result.length; i++) {
            let image = result[i].flags.png;
            let name = result[i].name.common;
            let capital = result[i].capital;
            let region = result[i].region;
            let countryCode = result[i].fifa;
            let lat = result[i].latlng[0];
            let lon = result[i].latlng[1];
            const cardContainer = document.querySelector(".cardContainer");
            console.log(cardContainer)
            cardContainer.innerHTML += `               
                             <div class="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-4 mb-3 justify-content-center"">
                             <div class="card text-center">
                             <h1 class="card-header rounded-top-4 text-black bg-dark text-center fs-3" style="background-image:linear-gradient(90deg,#d3c29e,#4c5c59)">${name}</h1>
                             <img src="${image}" class="rounded" style="height:14rem;width:auto ; border:2px solid black;" alt="flag">
                             <div class="card-body text-center fs-4 fw-bold bg-black text-white">
                               <p class="card-text">Capital:${capital}</p>
                               <p class="card-text">Region:${region}</p>
                               <p class="card-text">Country Code:${countryCode}</p>
                               <p class="class="card-title">LatLng: ${result[i].latlng}</p>
                               <button class="btn btn-primary weatherButton" onclick="weather(${lat},${lon},${i})">Click for Weather</button>
                               <div id="weatherReport${i}"></div>
                             </div>
                             </div>
                             </div> `
        }
    }).catch((error) => console.log("error occured during the rest countries api process"));

function weather(lat, lon, i) {
    const weatherReport = document.querySelector(`#weatherReport${i}`);
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=90855e190d8921e0db834bb5086167bf`)
        .then((response) => response.json())
        .then((data) => {
            alert(`
    Current Temperature is ${parseInt(data.main.temp - 273)}°C       
    Current Humidity is ${data.main.humidity}%
    current wind speed is ${data.wind.speed}km/h
    Current Pressure is ${data.main.pressure}mb`
            )
        })
}

document.addEventListener("click", (event) => event.preventDefault())
