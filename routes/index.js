let express = require('express');
let router = express.Router();
let bodyParser = require("body-parser"); 

let contact = require('../models/contact')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { 
    title: 'Home',
    contact: contact
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', 
  { 
    title: 'Home',
    contact: contact
  });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', 
  { 
    title: 'About'
  });
});

/* GET products page. */
router.get('/products', function(req, res, next) {
  res.render('index', 
  { 
    title: 'Products'
  });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', 
  { 
    title: 'Services'
  });
});

module.exports = router;
