const express = require('express');
const mongoose = require('mongoose');
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
app.get('/', (req, res) => {
  const items = [
    { id: 1, name: 'Earphone Sony', price: 3500000 },
    { id: 1, name: 'Book Python', price: 150000 },
    { id: 1, name: 'Pen', price: 25000 },
    { id: 1, name: 'Acer PC', price: 9500000 },
  ]
  res.render('index', { items });
});

app.get('/add-item', (req, res) => {
  res.render('add-item');
});

app.use((req, res) => {
  res.render('404');
});

