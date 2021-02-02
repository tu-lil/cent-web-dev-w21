// The application file is using the connect module to create a new web server.
// Connect isn't a core module, so you'll have to install it using npm (npm install connect). 
const connect = require('connect');
const app = connect();

// Connect middlewareConnect middleware is basically a JavaScript function with a unique signature. 
// Each middleware function is defined with the following three arguments: 
// req: This is an object that holds the HTTP requestinformation 
// res: This is an object that holds the HTTP responseinformation and allows you to set the response properties 
// next: This is the next middleware function defined in the ordered set of Connect middleware
function helloWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
};

function goodbyeWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Goodbye World');
};

function logger(req, res, next) {
    console.log(req.method, req.url)
    next();
};

// When you have a middleware defined, you'll just have to register it with the Connect application using the app.use() method. 
app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);

app.listen(3000);

console.log('Server running at http://localhost:3000/');
