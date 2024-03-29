const express = require('express')
const port = 3000
const path = require("path")
const axios = require("axios")

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, "/static/")))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/index.html"))
})

app.post('/api/weather', (req, res) => {
  lat = req.body.lat
  long = req.body.long

    
    axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat +"&lon=" + long + "&appid=10c33e2b3a0f45acd14008c3a4a46079").then(resp => {
        console.log("DATA REQUEST INBOUND\n\nResponse: " + JSON.stringify(resp.data))
        res.send(JSON.stringify(resp.data))
    return;
    })
   
})


app.listen(port, () => {
  console.log(`Cloud weather listening on port ${port}!`)
})