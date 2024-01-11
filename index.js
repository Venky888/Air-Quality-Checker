// inputs
const longitude = document.getElementById("longInp")
const latitude = document.getElementById("latInp")


const resultContainer = document.querySelector(".resultContainer")
const resultError = document.querySelector(".resultError")
const form = document.getElementById("form")

// parameters
const cityname = document.getElementById("cityname")
const statecode = document.getElementById("statecode")
const countrycode = document.getElementById("countrycode")
const long = document.getElementById("lon")
const lati = document.getElementById("lat")
const aqi = document.getElementById("aqi")
const pm10 = document.getElementById("pm10")
const co = document.getElementById("co")
const o3 = document.getElementById("o3")
const s02 = document.getElementById("so2")
const no2 = document.getElementById("no2")
const pm25 = document.getElementById("pm25")

const video = document.querySelector("video")
const background = document.querySelector(".bg")
const errorMsg = document.getElementById("error")


//fetch request to accesss the data from api
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let lat = parseFloat(latitude.value)
    let long = parseFloat(longitude.value)

    if ((lat > -90 && lat < 90) && (long > -180 && long < 180)) {


        const url = `https://air-quality.p.rapidapi.com/history/airquality?lon=${long}&lat=${lat}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bf0b59f44bmsh0d834165daefe1fp104b2fjsnd737b4841dea',
                'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
            }
        }

        fetch(url, options)
            .then(res => res.json())
            .then(result => {

                cityname.innerText = `"${result.city_name}"`
                statecode.innerText = `"${result.state_code}"`
                countrycode.innerText = `"${result.country_code}"`

                aqi.innerText = result.data[0].aqi
                pm10.innerText = result.data[0].pm10
                co.innerText = result.data[0].co
                o3.innerHTML = result.data[0].o3
                so2.innerText = result.data[0].so2
                no2.innerText = result.data[0].no2
                pm25.innerText = result.data[0].pm25


            })

        resultContainer.style.display = "block"
        resultError.style.display = "none"
        errorMsg.style.display = "none"
        video.style.display = "block"
        background.classList.remove('bg')

    }
    else {
        errorMsg.style.display = "block"
        resultError.style.display = "flex"
        resultContainer.style.display = "none"
        console.log("Eroor ")
    }
})


