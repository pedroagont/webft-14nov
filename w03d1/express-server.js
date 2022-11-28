const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World from express!');
});

app.get('/pedro', (req, res) => {
  res.send('<h1>Hello World from /pedro!</h1>');
});

app.get('/api/users', (req, res) => {
  const users = ['abdul', 'dihni', 'nawal'];
  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
