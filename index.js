const express = require('express')
const app = express()
const port = 3000
const path = require("path")

app.use(express.static(path.join(__dirname, "/static/")))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/pages/index.html"))
})

app.listen(port, () => {
  console.log(`Cloud weather listening on port ${port}!`)
})