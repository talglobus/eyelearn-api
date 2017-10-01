/*
 * © 2017 Tal Globus. All Rights Reserved.
 */

let express = require('express');
let request = require('request');
let router = express.Router();

/* GET users listing. */
router.get('/:videoID', function(req, res, next) {
	if (typeof req.params === "undefined" || typeof req.params.videoID === "undefined") {
		return res.status(400).end("You must include a YouTube video id after /transcript/ in the request");
	}
	request(`http://www.khanacademy.org/api/internal/videos/${req.params.videoID}/transcript`, (err, _, body) => {
		if (err) return res.status(500).end(err);
		res.json(body);
	});
});

module.exports = router;