let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to the book model
let Book = require('../models/book');

/* GET router for the Book list page */
router.get('/list', (req, res, next) => {
    Book.find((err, booklist) => {
        if(err){
        return console.error(err);
        }else{
            // console.log(booklist);
            res.render('book/list', {title: 'Book List', books: booklist});
        }
    });
});

/* GET router for the ADD Book page - CREATE */
router.get('/add', (req, res, next) => {
    res.render('book/add', {title: 'New Book'});
});

/* POST router for the ADD Book page - CREATE */
router.post('/add', (req, res, next) => {
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
});

/* GET router for the EDIT Book page - UPDATE */
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;
    console.log('pppppppppp');

    Book.findById(id, (err, bookToEdit) =>{
        console.log('ssssssss');

        if(err) {
            console.log(err);
            res.end(err);
        } else {
            console.log('aaaaaaa');
            console.log(bookToEdit);

            // show the edit view
            res.render('book/edit', {title: 'Edit Book', book: bookToEdit});
        }
        console.log('xxxxx');

    });
});

/* POST router for the EDIT Book page - UPDATE */
router.post('/edit/:id', (req, res, next) => {
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
});


/* GET router for the DELETE Book page - DELETE */
router.get('/delete/:id', (req, res, next) => {
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
});

module.exports = router;