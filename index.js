const express = require('express');
const app = express();
const hbs = require('hbs');



app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res, next) => {
  // __dirname es una variable de entorno
  res.status(200).render('index');
})

app.get('/about', (req, res, next) => {
  const data = {
    name: 'Ale',
    age: 32,
    isTeacher: true,
    boardGames: 80,
    warning: false,
    siblings: ['Carlos', 'Cristina', 'Javi'],
    pets: [
      {
        name: 'Aria',
        gender: 'female',
        type: 'dog',
        age: 5
      },
      {
        name: 'Dolfy',
        gender: 'female',
        type: 'dog',
        age: 10
      }
    ]
  }
  res.render('about', data);
})

app.get('/contact', (req, res) => {
  res.send('get in touch with us')
})

app.get('/api', (req, res) => {
  const cats = [
    { name: 'Kitty', age: 3 },
    { name: 'Lousiana', age: 5 }
  ]
  res.json(cats);
})

app.listen(3000, () => { console.log('App running on port 3000') });