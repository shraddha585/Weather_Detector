const apiKey="d6f1ec09e194f16e9223b84b3fc12fbb";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon");

async function checkWeather(city){
    const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data= await response.json();

    if(response.status==404){
      document.querySelector(".error").style.display="block";
      document.querySelector(".weather").style.display="none";
    }else{

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C";
    document.querySelector(".humidity").innerHTML=Math.round(data.main.humidity)+"%";
    document.querySelector(".wind").innerHTML=Math.round(data.wind.speed)+"km/h";

    if(data.weather[0].main=="Clouds"){
       weatherIcon.src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFc6pAzxSSXSKONcNGU_nJTxlVWN_J4OneMOnkjVNOb3_YOLn5p_X8jtx0Hg&s";
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src="clear_weather.jpeg";
     }else if(data.weather[0].main=="Rain"){
        weatherIcon.src="rain.jpeg";
     }else if(data.weather[0].main=="Orizzle"){
        weatherIcon.src="orizzle.jpeg";
     }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src=" drizzle.jpeg";
     }else if(data.weather[0].main=="Mist"){
        weatherIcon.src=" mist.jpeg";
     }else{
        weatherIcon.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxzPvFa4K3UK07r2Frx-NTr6qBiNvKyecPpA&s"
     }

     document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
}
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})