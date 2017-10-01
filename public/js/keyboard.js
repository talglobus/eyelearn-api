/*
 * © 2017 Tal Globus. All Rights Reserved.
 */

tryTo = true;

micro = {
	"youtubeID": "640-86yn2wM",
	"videoURL": "https://cdn.kastatic.org/KA-youtube-converted/640-86yn2wM.mp4/640-86yn2wM.mp4",
	"id": "writing-expressions-with-variables-examples",
	"topicID": "alg-writing-expressions"
};

function injectVideo(videoURL) {
	"use strict";
	if (!tryTo) return;
	$('video > source').attr('src', videoURL);
	let video = $('video');
	video.load();
	video.play();
}

$( document ).ready(function() {
	injectVideo(micro.videoURL);
});


function requestNext(macro) {
	"use strict";
	if (!tryTo) return;
	$.get( "/next/" + micro.topicID + "/" + micro.id, function( data ) {
		micro = data;
		injectVideo(data.videoURL);
	});
}

function requestPrev(macro) {
	"use strict";
	if (!tryTo) return;
	$.get( "/prev/" + micro.topicID + "/" + micro.id, function( data ) {
		micro = data;
		injectVideo(data.videoURL);
	});
}

// injectVideo(micro.videoURL);

$("owl-next").click(function() {
	event.stopImmediatePropagation();
	requestNext(micro);
	if (micro !== [] || !micro) {
		injectVideo(micro.videoURL);
	} else {
		tryTo = false;
	}
});

$("owl-prev").click(function() {
	event.stopImmediatePropagation();
	requestPrev(micro);
	if (micro !== [] || !micro) {
		injectVideo(micro.videoURL);
	} else {
		tryTo = false;
	}
});

$(document).keyup(function(event) {
	if (event.which === 39) {		// If pressed right
		event.preventDefault();
		requestNext(micro);
		if (micro !== [] || !micro) {
			console.log(micro);
			injectVideo(micro.videoURL);
		} else {
			tryTo = false;
		}
	} else if (event.which === 37) { // If pressed left
		event.preventDefault();
		requestPrev(micro);
		if (micro !== [] || !micro) {
			console.log(micro);
			injectVideo(micro.videoURL);
		} else {
			tryTo = false;
		}
	} else if (event.which === 38) { // If pressed up
		event.preventDefault();

	} else if (event.which === 40) { // If pressed down
		event.preventDefault();

	} else if (event.which === 32) { // If pressed space
		event.preventDefault();

	} else if (event.which === 13) { // If pressed space
		event.preventDefault();
	}
});