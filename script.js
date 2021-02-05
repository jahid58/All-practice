const cityName = document.getElementById('city-input');
const city = document.getElementById('city');
const searchBtn = document.getElementById('search');
const temperature = document.getElementById('temperature');

function getTemperature(){

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName.value+'&appid=ed2e168ceb6cc1d0d2a20ea0fe1b3434')
    .then((temp)=>temp.json())
    .then((tempData)=>{
        var currentTemp = Math.round(tempData.main.temp-273)
        var currentCity = tempData.name;
        temperature.innerText = currentTemp;
        city.innerText = currentCity;

    })
    
}

searchBtn.addEventListener('click',getTemperature)