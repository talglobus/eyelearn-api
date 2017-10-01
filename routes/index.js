let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'eye·learn | The Light is Brightest in the Dark' });
});

module.exports = router;
