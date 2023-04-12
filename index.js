const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

// endpoint utama metode GET 
app.use(bodyParser.json())

app.get('/', (request, respond) => {
  db.query("SELECT * FROM mahasis", (eror, result) => {
    // hasil data dari mysql
    response(200, result, "get all data from mahasiswa", res)
  })
})

app.get('/hello', (req, res) => {
  console.log({ urlParam: req.query.nama })
  res.send('Hello World!')
})

app.post('/login', (req, res) => {
  console.log({ requestFromOutside: req.body })
  res.send('login berhasil')
})

app.put('/username', (req, res) => {
  console.log({ updateData: req.body })
  res.send('update berhasil')
})
// 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})