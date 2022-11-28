// WEB SERVER

// CLIENT ------------------- SERVER
// REQUEST <-----------------> RESPONSE

// RENDERING ROUTES
// method - action
// GET /
// GET /fruits/new
// GET /fruits/:id
// GET /fruits

// API ROUTES
// method - action (CRUD)
// CREATE - POST /api/fruits
// READ ALL - GET /api/fruits
// READ ONE - GET /api/fruits/:id
// UPDATE - PUT/POST /api/fruits/:id/edit
// DELETE - DELETE/POST /api/fruits/:id/delete

// console.log('Hi from index.js');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(`METHOD: ${req.method} URL: ${req.url}`);

  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  } else if (req.url === '/pedro') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Pedro!');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Route not found!');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
