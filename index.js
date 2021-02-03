//  first two lines require the Express module and create a new Express application object.
var express = require('express');
var app = express();

// Use the app.use() method to mount a middleware function with a specific path,
// the app.use() method is used to mount a middleware function, which will respond to any HTTP request made to the root path. 
app.use('/', function(req, res) {
    // inside the middleware function, the res.send() method is then used to send the response back.
    // The res.send() method is basically an Express wrapper that sets the Content-Type header according to the response object type and then sends a response back using the Connect res.end() method. 
    res.send('Hello World');
});

// the app.listen() method to tell the Express application to listen to the port 3000.
app.listen(3000);

console.log('Server running at http://localhost:3000/');

// Notice how the module.exports object is used to return the application object. 
// This will later help us load and test our Express application. 
module.exports = app;