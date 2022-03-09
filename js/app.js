const API_KEY = `be4ed7d43dc006fd835ed5d01cf9ee67`;
const searchTemperature = () => {
    const city = document.getElementById('cityInputField').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => displayTemperature(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

/* const setTempValue = (id, text) =>{
    document.getElementById(id).innerText = text;
}

const setWeatherText = (id, text) =>{
    document.getElementById(id).innerText = text;
} */

const displayTemperature = getTemperature => {
    setInnerText('showCity', getTemperature.name);
    setInnerText('currentTemp', getTemperature.main.temp);
    setInnerText('weatherArea', getTemperature.weather[0].main);

    console.log(getTemperature);

    const url = `http://openweathermap.org/img/wn/${getTemperature.weather[0].icon}@2x.png`;
    const imageIcon = document.getElementById('weatherIcon');
    imageIcon.setAttribute('src', url);
}