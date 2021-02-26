const express = require('express');
const mongoose = require('mongoose');
const Item = require('./models/items');
const app = express();
const port = 3000;
const mongodb = 'mongodb+srv://imalzy:admin@cluster0.uibh2.mongodb.net/todo_db?retryWrites=true&w=majority'
mongoose.connect(mongodb, {
  useNewUrlParser: true, useUnifiedTopology: true,
  serverSelectionTimeoutMS: 2000
}).then(() => {
  console.log('connection ready')
  app.listen(port, () => {
    console.log(`Application Running at http://localhost:${port}`);
  });

}).catch(error => handleError(error));


app.set('view engine', 'ejs');

app.get('/create', (req, res)=>{
  const item = new Item({
    name: 'Earphone Sony',
    price: 3500000
  });
  item.save().then(result=>res.send(result));
});

app.get('/itembyid', (req, res)=>{
  Item.findById({_id: "603857534f31da42a8b86658"}).then(result=>res.send(result));
});

app.get('/', (req, res) => {
  res.redirect('/list');
});

app.get('/list', (req, res)=>{
  Item.find().then(result=>{
    res.render('index', { items: result });
  });
});

app.get('/add-item', (req, res) => {
  res.render('add-item');
});

app.use((req, res) => {
  res.render('404');
});

