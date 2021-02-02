// the http module is used to create a small web server
const http = require('http');

// basic example of a basic Node web server
// Notice the callback function that is passed as an argument to the createServer() method.
http.createServer((req, res) => {res.writeHead(200, {'Content-Type': 'text/plain'});

// The listen() method is then used to listen to the 3000 port.
res.end('Hello World');}).listen(3000);


// Now, open http://localhost:3000 in your browser and you'll see the Hello World response.
console.log('Server running at http://localhost:3000/');