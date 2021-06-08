
const path = require('path')
const fs = require('fs')
const axios = require('axios')

const dir = path.join('/', 'usr', 'src', 'app', 'files')
const imgPath = path.join(dir, 'image.jpg')

const fileAlreadyExists = async (file) =>
  new Promise((res) => {
    fs.stat(file, (err, stats) => {
      if (err || !stats) return res(false)
      return res(true)
    })
  })

const cachedImage = async () => {
    const randomNumber = Math.floor(Math.random() * 1000)
    if (!(await fileAlreadyExists(imgPath))) {
        await new Promise((res) => fs.mkdir(dir, (err) => res()))
        const response = await axios.get(`https://picsum.photos/${randomNumber}`, { responseType: "stream" })
        response.data.pipe(fs.createWriteStream(imgPath))
    }
}
cachedImage()

module.exports = imgPath