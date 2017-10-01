let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('contribute', { title: 'eye·learn | The Light is Brightest in the Dark' });
});

module.exports = router;
