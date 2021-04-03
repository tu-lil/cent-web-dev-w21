let express = require('express');
let router = express.Router();
let passport = require('passport')

let bookController = require('../controllers/book');



/* GET router for the Book list page */
router.get('/list', passport.authenticate('jwt', {session: false}), bookController.getBookList);

/* POST router for the ADD Book page - CREATE */
router.post('/add', passport.authenticate('jwt', {session: false}), bookController.processBookCreation);

/* GET router for the EDIT Book page - UPDATE */
router.get('/:id', passport.authenticate('jwt', {session: false}), bookController.getABook);

/* POST router for the EDIT Book page - UPDATE */
router.post('/:id', passport.authenticate('jwt', {session: false}), bookController.processBookUpdate);

/* GET router for the DELETE Book page - DELETE */

router.delete('/delete/:id', passport.authenticate('jwt', {session: false}), bookController.performBookDeletion);

module.exports = router;