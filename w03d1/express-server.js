// ----------- REQUIREMENTS
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

// ----------- MIDDLEWARES
app.set('view engine', 'ejs');

app.use((req, res, next) => {
  // console.log('Hello from my middleware!');
  console.log(`Incoming request: URL - ${req.url} METHOD - ${req.method}`);
  next();
});

app.use(morgan('dev'));

// ----------- ROUTES
app.get('/', (req, res) => {
  const templateVars = {
    message: 'hello there',
    username: 'Alice Bob Carol',
    age: 25,
  };

  res.render('index', templateVars);
});

app.get('/lighthouselabs', (req, res) => {
  res.status(200).send('Hello from /lighthouselabs route! 👋');
});

app.get('/pedro', (req, res) => {
  res.status(200).send('<h1>Hello World from /pedro!</h1>');
});

app.get('/google', (req, res) => {
  res.status(302).redirect('https://google.com');
});

app.get('/api/users', (req, res) => {
  const users = ['abdul', 'dihni', 'nawal', 'rohan'];
  res.send(users);
});

app.get('/welcome', (req, res) => {
  console.log(req.query);

  const { username } = req.query;
  if (!username) {
    res.status(400).send('username query not provided!');
    return; // the return statement will stop executing the next lines of code, blocking the next res call and avoiding cannot set headers after response error
  }

  res.status(200).send(`Welcome user ${username}`);
});

// ----------- LISTENER
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
