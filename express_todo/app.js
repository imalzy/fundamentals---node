const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const port = 3000;

app.get('/', (req, res) => {
  res.render('index');
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
