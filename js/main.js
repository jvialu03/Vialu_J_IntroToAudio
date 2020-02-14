(() => {
	// make reference to all the playButtons
	const playButtons = document.querySelectorAll('.playButton'),
		pauseButtons = document.querySelectorAll('.pauseButton'),
		rwButtons = document.querySelectorAll('.rwButton'),
		audioElement = document.querySelector('audio');

		let globalPaused = false;

	// play the song associated with the butoon (its data-track attirubute)
	function playTrack() {
		// try to fix pause play bug
		// a teurn statement kills your cone execution here - don't go past this point
		if (globalPaused) {
			console.log('paused');
			// if our audio is paused, then just play the track and exit
			resumeTrack();
			return;
		}
		//debugger;
		let audioSource = this.dataset.trackref;

		// set audio source
		audioElement.src = `audio/${audioSource}.mp3`;

		// load and play
		audioElement.load();
		audioElement.play();
	}

	function resumeTrack() {
		globalPaused = false;
		audioElement.play();
	}

	function pauseTrack() {
		audioElement.pause();
		globalPaused = true;
	}

	function rwTrack() {
		audioElement.currentTime = 0;
	}

	// process the playButtons and add some event bulding
	playButtons.forEach(button => button.addEventListener("click", playTrack));
	pauseButtons.forEach(button => button.addEventListener("click", pauseTrack));
	rwButtons.forEach(button => button.addEventListener("click", rwTrack));

})();
