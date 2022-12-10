const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) => {
  // __dirname es una variable de entorno
  res.status(200).sendFile(__dirname + '/views/cacatua.html')
})

app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/views/about.html')
})

app.get('/contact', (req, res) => {
  res.send('get in touch with us')
})

app.get('/api', (req, res) => {
  const cats = [
    { name: 'Kitty', age: 3 },
    { name: 'Lousiana', age: 5 }
  ]
})

app.listen(3000, () => { console.log('App running on port 3000') });