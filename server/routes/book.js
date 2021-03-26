let express = require('express');
let router = express.Router();

let passport = require('passport')

let bookController = require('../controllers/book');


// helper function for route guard purposes
function requireAuth(req, res, next) {
    //check if user is logged in
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}



/* GET router for the Book list page */
router.get('/list', bookController.displayBookList);

/* POST router for the ADD Book page - CREATE */
router.post('/add', bookController.processBookCreation);

/* GET router for the EDIT Book page - UPDATE */
router.get('/:id', bookController.displayEditBook);

/* POST router for the EDIT Book page - UPDATE */
router.post('/:id', bookController.processBookUpdate);

/* GET router for the DELETE Book page - DELETE */
router.get('/delete/:id', requireAuth, bookController.performBookDeletion);

module.exports = router;