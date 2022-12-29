let lat = 42.7325
let long = 84.5555
let url = "https://api.openweathermap.org/data/3.0/onecall??lat=" + lat +"&lon=" + long + "&appid=10c33e2b3a0f45acd14008c3a4a46079"
let wt = null
function getWeather() {
    if(navigator.geolocation) {
        positon = navigator.geolocation.getCurrentPosition(setPosition)
        console.log(positon)
    }
}


function setPosition(position) {
    lat = position.coords.latitude
    long = position.coords.longitude
    url = "https://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude +"&lon=" + position.coords.longitude + "&appid=10c33e2b3a0f45acd14008c3a4a46079&units=imperial"
    console.log(url)
    console.log(position.coords.longitude)
    axios.get(url)
    .then(data=>setWeather(data))
    .catch(err=>console.log(err))
}


function setWeather(data) {
    if (data == null) {
        console.error("data set problem")
        return;
    }
    wt = data;
    console.log(wt)
    //set elements
    wtDstring = wt.data.weather[0].description
    wtDstringSpl = wtDstring.split(" ")
    for (let i = 0; i < wtDstringSpl.length; i++) {
        wtDstringSpl[i] = wtDstringSpl[i][0].toUpperCase() + wtDstringSpl[i].substr(1);
    }
    wtDstringSpl = wtDstringSpl.join(" ")
    windData = "Wind: " + wt.data.wind.speed + "mph"
    pressure = wt.data.main.pressure*0.030
    sunrise=new Date(wt.data.sys.sunrise * 1000).toLocaleString();
    sunset=new Date(wt.data.sys.sunset * 1000).toLocaleString();
}


