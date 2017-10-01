/*
 * © 2017 Tal Globus. All Rights Reserved.
 */

let express = require('express');
let request = require('request');
let router = express.Router();

/* GET users listing. */
router.get('/:topicID/:videoID', function(req, res, next) {
	if (typeof req.params === "undefined" || typeof req.params.topicID === "undefined"
		|| typeof req.params.videoID === "undefined") {
		return res.status(400).end("You must include a video id after /transcript/ in the request");
	}

	request(`http://www.khanacademy.org/api/v1/topic/${req.params.topicID}`, (err, _, body) => {
		if (err) return res.status(500).end(err);
		body = JSON.parse(body);
		for (let i = 0; i < body.children.length; i++) {
			if (body.children[i].id === req.params.videoID) {
				let next = body.children.slice(0, i).filter(elem => elem.kind === "Video");
				if (!next.length) return res.json([]);
				else next = next[next.length-1];
				request(`http://www.khanacademy.org/api/v1/videos/${next.id}`, (err, _, vidBody) => {
					if (err) return res.status(500).end(err);
					vidBody = JSON.parse(vidBody);
					res.json({
						youtubeID: vidBody.translated_youtube_id,
						videoURL: vidBody.download_urls.mp4,
						id: next.id
					});
				});
			}
		}
	});
});

module.exports = router;