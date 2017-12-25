const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  var now = new Date().toString();

  console.log(`${now}: ${req.method} ${req.url}`);
  next();
});

/*
app.use((req, res, next) => {
  res.render('maintain.hbs');
});
*/
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});


app.get('/', (req, res) => {
//res.send('<h1>Hello Express!</h1>');
/*
  res.send({
    name: 'Koshy',
    likes: [
      'Soccer',
      'Swim'
    ]
  });
*/
  res.render('home.hbs', {
    pageTitle: 'Main Page',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.get('/bad', (req, res) => {
  res.send({
    error: 'Error Message'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
