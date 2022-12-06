const express = require('express')
const app = express()
const port = 3000
const path = require("path")

app.use(express.static(path.join(__dirname, "/static/")))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/index.html"))
})
app.get('/weather', (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/weather/forecast.html"))
})
app.get('/hourly-forecast', (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/weather/hourly.html"))
})
app.get('/misc-forecast', (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/weather/misc.html"))
})
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/about.html"))
})
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/contact.html"))
})
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/login.html"))
})


app.listen(port, () => {
  console.log(`Cloud weather listening on port ${port}!`)
})