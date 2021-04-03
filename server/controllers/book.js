let express = require('express');
let router = express.Router();

// enable jwt
let jwt = require('jsonwebtoken');
let DB = require('../config/db');

//connect to the book model
let Book = require('../models/book');

/* GET router for the Book list page */
module.exports.getBookList = (req, res, next) => {
    console.log('ppppppp')
    Book.find((err, booklist) => {
        if(err){
            return console.error(err);
        }else{
            return res.json(
                books = booklist
            );
        }
    });
};

/* POST router for the ADD Book page - CREATE */
module.exports.processBookCreation =  (req, res, next) => {
    let newBook = Book ({
        name: req.body.name,
        author: req.body.author,
        description: req.body.description,
        published: req.body.published,
        price: req.body.price 
    });
    Book.create(newBook, (err) =>{
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            // refresh booklist
            res.json(newBook);
        }
    });
};

/* GET router for the EDIT Book page - UPDATE */
module.exports.getABook =  (req, res, next) => {
    let id = req.params.id;
    Book.findById(id, (err, bookToEdit) =>{
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            // show the edit view
            return res.json(bookToEdit);
        }
    });
};

/* POST router for the EDIT Book page - UPDATE */
module.exports.processBookUpdate = (req, res, next) => {
    let id = req.params.id;
    let updatedBook = Book ({
        _id: id,
        name: req.body.name,
        author: req.body.author,
        description: req.body.description,
        published: req.body.published,
        price: req.body.price 
    });

    Book.updateOne({_id: id}, updatedBook, (err) => {
        if(err){
            console.log(err);
            res.end(err); 
        } else {
            // refresh booklist
            return res.json(updatedBook);
        }
    });
};


/* GET router for the DELETE Book page - DELETE */
module.exports.performBookDeletion =  (req, res, next) => {
    let id = req.params.id;
    Book.remove({_id: id}, (err) =>{
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            // refresh book list
            res.json(id);
        }
    });
};