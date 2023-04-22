const video = document.getElementById('video');
const playButton = document.getElementById('play-btn');
const pauseButton = document.getElementById('pause-btn');
const seekBar = document.getElementById('seek-bar');

const socket = io();

const messageForm = document.querySelector('#message-form');
const messageInput = document.querySelector('input[name="message"]');
const messagesList = document.querySelector('#messages');

playButton.addEventListener('click', () => {
	video.play();
});

pauseButton.addEventListener('click', () =>
