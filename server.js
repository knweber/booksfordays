const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

MongoClient.connect('mongodb://knweber:Brewers2016@ds159033.mlab.com:59033/booksfordays', (err, database) => {
  if (err) return console.log(err);
  db = database;
  app.listen(3000, () => {
    console.log("listening on port 3000");
  })
});

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res) => {
  var cursor = db.collection('books').find();
})

app.post('/books', (req,res) => {
  db.collection('books').save(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log('saved to database');
    res.redirect('/');
  })
  console.log(req.body);
})
