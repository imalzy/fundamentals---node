const express = require('express');
const app = express();
const monggodb = 'mongodb+srv://imalzy:admin@cluster0.uibh2.mongodb.net/todo_db?retryWrites=true&w=majority'
app.set('view engine', 'ejs');
app.set('view engine', 'ejs');
const port = 3000;

app.get('/', (req, res) => {
  const items = [
    {id:1, name: 'Earphone Sony', price: 3500000},
    {id:1, name: 'Book Python', price: 150000},
    {id:1, name: 'Pen', price: 25000},
    {id:1, name: 'Acer PC', price: 9500000},
  ]
  res.render('index', {items});
});

app.get('/add-item', (req, res) => {
  res.render('add-item');
});

app.use((req, res) => {
  res.render('404');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
