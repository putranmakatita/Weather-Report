const buttonSearch = document.querySelector(".button-search");
let weather= {
    apiKey : "e32a40a32fa847c0e46e25fe3123e1bd",
    fetchWeather : function (city) {
        fetch(
    "https://api.openweathermap.org/data/2.5/weather?q="
    + city + "&APPID=" + this.apiKey + "&units=metric"
    ).then((response) => response.json())
    .then((data) => this.displayWeather(data))
    .catch((message) => alert("Name of the city is not found"));
    },
    displayWeather : function (data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = name;
        document.querySelector(".weather").innerText = description;
        document.querySelector(".icon").src = 'https://openweathermap.org/img/wn/'+ icon +'.png'
        document.querySelector(".temperature").innerText = temp + "°C"
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind-speed").innerText = "Wind speed: " + speed + "km/h";
        console.log(description);
        if (description.includes("sky")){

            document.querySelector(".background").style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2017/11/04/08/14/tree-2916763_960_720.jpg")';

        }
        else {
            ;
        }
    },
    search : function() {
        this.fetchWeather(document.querySelector(".textbox").value);
        document.querySelector(".textbox").value = ""


    }
}

buttonSearch.addEventListener("click", function() {
    weather.search();
})