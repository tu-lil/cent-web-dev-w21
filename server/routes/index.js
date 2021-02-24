let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET about page. */
router.get('/about',  indexController.displayAboutPage);

/* GET products page. */
router.get('/products',  indexController.displayProductsPage);

/* GET services page. */
router.get('/services',  indexController.displayServicesPage);

/* GET user login page. */
router.get('/login',  indexController.displayLoginPage);

/* process submission from user login page. */
router.post('/login',  indexController.processLoginPage);

/* GET user registration page. */
router.get('/register',  indexController.displayRegisterPage);

/* POST from user registration page. */
router.post('/register',  indexController.processRegisterPage);

/* perform user logout. */
router.get('/logout',  indexController.performLogout);

module.exports = router;
