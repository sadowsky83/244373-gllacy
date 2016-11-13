var link = document.querySelector(".btn-feedback");
var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".modal-feedback-close");
var login = popup.querySelector("[name=feedback-name]");
var email = popup.querySelector("[name=feedback-email]");
var feedback = popup.querySelector("[name=feedback-text]");
var form = popup.querySelector("form");
var storage1 = localStorage.getItem("login");
var storage2 = localStorage.getItem("email");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	overlay.classList.add("overlay-show");
	login.focus();

	if (storage1) {
		login.value = storage1;
		if (storage2) {
			email.value = storage2;
			feedback.focus();
		} else {
			email.focus();
		}
	} else {
		login.focus();
	}
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	overlay.classList.remove("overlay-show");
});

window,addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
			overlay.classList.remove("overlay-show");
		}
	}
});