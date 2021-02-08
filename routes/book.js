let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to the book model
let book = require('../models/book');

/* GET router for the Book list page */
router.get('/', (req, res, next) => {
    book.find((err, booklist) => {
        if(err){
        return console.error(err);
        }else{
            // console.log(booklist);
            res.render('books', {title: 'Book List', books: booklist});
        }

    });
});

module.exports = router;