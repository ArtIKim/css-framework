const darkModeButton = document.querySelector(".js-switch-button-dark-mode");

darkModeButton.addEventListener("change", () => {
	document.body.classList.toggle("dark-mode");
});
