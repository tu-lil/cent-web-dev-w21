let express = require('express');
let router = express.Router();

let contactController = require('../controllers/contact');

/* GET contact us page. */
router.get('/', contactController.displayContactPage);

/* POST from contact us page. */
router.post('/', contactController.processContactInformation);


module.exports = router;