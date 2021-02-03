//  first two lines require the Express module and create a new Express application object.
var express = require('express');
var app = express();

// Express supports the routing of requests using either the app.route(path).VERB(callback)method 
// or the app.VERB(path,callback)method, where VERB should be replaced with a lowercase HTTP verb.
// below is example of http GET method
// This tells Express to execute the middleware function for any HTTP request using the GET verb and directed to the ROOT path.
app.get('/', function(req, res) {
    res.send('Hello World');
});

// This tells Express to execute the middleware function for any HTTP request using the GET verb and directed to the INFO path.
app.get('/info', function(req, res) {
    res.send('Info');
});

// This tells Express to execute the middleware function for any HTTP request using the GET verb and directed to the CONTACTS path.
app.get('/contacts', function(req, res) {
    res.send('Contact Info');
});

// the app.listen() method to tell the Express application to listen to the port 3000.
app.listen(3000);

console.log('Server running at http://localhost:3000/');

// Notice how the module.exports object is used to return the application object. 
// This will later help us load and test our Express application. 
module.exports = app;