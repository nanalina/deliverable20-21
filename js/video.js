var video;

// Page load
window.addEventListener("load", function() {
	console.log("Good job opening the window")

	// Initialize 
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.pause();
	video.loop = false;
	video.volume = document.querySelector("#slider").value / 100;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
});


