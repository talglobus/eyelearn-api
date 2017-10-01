/*
 * © 2017 Tal Globus. All Rights Reserved.
 */

let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('learn', { title: 'eye·learn | The Light is Brightest in the Dark' });
});

module.exports = router;