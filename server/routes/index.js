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


module.exports = router;
