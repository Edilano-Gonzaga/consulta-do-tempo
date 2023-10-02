// Variáveis e seleção de elementos
const apiKey = "4fa0c586ee4fa7003f2c7cd7b8edcb7b";//nunca posta a chave da api no github
// const apiCountryURL = "https://flagcdn.com/.png/";
//aqui estou mapeando onde o meu usuário vai clicar para solicitar as informações de pesquisa.
const cityInput = document.querySelector("#city-input");//cidade
const searchBtn = document.querySelector("#search");//pesquisa

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
// const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

// Funções
const getWeatherData = async(city) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
};


const showWeatherData = async (city) => {
const data = await getWeatherData(city);

cityElement.innerText = data.name;
tempElement.innerText = parseInt(data.main.temp);
descElement.innerText = data.weather[0].description;
weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
countryElement.setAttribute("src", apiCountryURL + data.sys.country);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;
};

// Eventos

searchBtn.addEventListener("click", (e) => {
e.preventDefault();

const city = cityInput.value;

showWeatherData(city);

});