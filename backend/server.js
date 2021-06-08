const express = require('express')
const cors = require('cors')
const imgPath = require('./cachimage')

const app = express()

app.use(cors())

app.get('/api', (req, res) => {
  res.json("Hello world!")
})

app.get('/api/dailyimage', (req, res) => {
    res.sendFile(imgPath)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})