let express = require('express');
let router = express.Router();

// enable jwt
let jwt = require('jsonwebtoken');
let DB = require('../config/db');

//connect to the book model
let Book = require('../models/book');

/* GET router for the Book list page */
module.exports.displayBookList = (req, res, next) => {
    Book.find((err, booklist) => {
        if(err){
            return console.error(err);
        }else{
            return res.json({
                books: booklist,
                displayName: req.user ? req.user.displayName : ''
            });
        }
    });
};

/* GET router for the ADD Book page - CREATE */
module.exports.displayAddBook =  (req, res, next) => {
    res.render('book/add', {
        title: 'New Book',
        displayName: req.user ? req.user.displayName : ''
    });
};

/* POST router for the ADD Book page - CREATE */
module.exports.processBookCreation =  (req, res, next) => {
    let newBook = Book ({
        name: req.body.bookName,
        author: req.body.bookAuthor,
        description: req.body.bookDescription,
        published: req.body.bookPublished,
        price: req.body.bookPrice 
    });
    Book.create(newBook, (err) =>{
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            // refresh booklist
            res.redirect('/book/list');
        }
    });
};

/* GET router for the EDIT Book page - UPDATE */
module.exports.displayEditBook =  (req, res, next) => {
    let id = req.params.id;
    Book.findById(id, (err, bookToEdit) =>{
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            // show the edit view
            return res.json({ 
                book: bookToEdit,
                displayName: req.user ? req.user.displayName : ''
            });
        }
    });
};

/* POST router for the EDIT Book page - UPDATE */
module.exports.processBookUpdate = (req, res, next) => {
    let id = req.params.id;
    let updatedBook = Book ({
        _id: id,
        name: req.body.bookName,
        author: req.body.bookAuthor,
        description: req.body.bookDescription,
        published: req.body.bookPublished,
        price: req.body.bookPrice 
    });

    Book.updateOne({_id: id}, updatedBook, (err) => {
        if(err){
            console.log(err);
            res.end(err); 
        } else {
            // refresh booklist
            res.redirect('/book/list');
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
            res.redirect('/book/list');
        }
    });
};