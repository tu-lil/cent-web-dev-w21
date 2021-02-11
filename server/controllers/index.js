let express = require('express');
let router = express.Router();

let contact = require('../models/contact')


module.exports.displayHomePage = (req, res, next) => {
    res.render('index', 
    { 
      title: 'Home',
      contact: contact
    });
};

  /* GET about page. */
  module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', 
    { 
      title: 'About'
    });
  };
  
  /* GET products page. */
  module.exports.displayProductsPage =(req, res, next) => {
    res.render('index', 
    { 
      title: 'Products'
    });
  };
  
  /* GET services page. */
  module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', 
    { 
      title: 'Services'
    });
  };