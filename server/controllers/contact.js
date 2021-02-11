let express = require('express');
let router = express.Router();

// create a reference to the model
let contact = require('../models/contact')

/* GET contact us page. */
module.exports.displayContactPage = (req, res, next) => {
  res.render('contact', 
  { 
    title: 'Contact Us'
  });
};

/* POST from contact us page. */
module.exports.processContactInformation = (req, res, next) => {
  contact.firstName = req.body.fname;
  res.redirect('/home');
};

