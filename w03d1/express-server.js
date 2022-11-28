// -------------------- REQUIREMENTS
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

// -------------------- MIDDLEWARE
app.use((req, res, next) => {
  console.log(`METHOD: ${req.method} URL: ${req.url}`);
  next();
});

app.use(morgan('dev'));

// -------------------- ROUTES/ENDPOINTS
app.get('/', (req, res) => {
  res.send('Hello World from express!');
});

app.get('/pedro', (req, res) => {
  res.send('<h1>Hello World from /pedro!</h1>');
});

app.get('/api/users', (req, res) => {
  const users = ['abdul', 'dihni', 'nawal', 'rohan'];
  res.send(users);
});

app.get('/welcome', (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).send('Name query not provided');
  }

  res.send(`Welcome ${name}`);
});

// -------------------- LISTENER
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
