// const darkModeButton = document.querySelector(".js-switch-button-dark-mode");
// const switchBallDarkMode = document.querySelector(".css-switch-ball-dark-mode");

// darkModeButton.addEventListener("change", () => {
// 	switchBallDarkMode.classList.toggle("active");
// 	document.body.classList.toggle("dark-mode");

// 	if (document.body.classList.contains("dark-mode")) {
// 		localStorage.setItem("dark-mode", "true");
// 		localStorage.setItem("switch-button-dark-mode", "true");
// 	} else {
// 		localStorage.setItem("dark-mode", "false");
// 		localStorage.setItem("switch-button-dark-mode", "false");
// 	}
// });

// if (localStorage.getItem("dark-mode") === "true") {
// 	document.body.classList.add("dark-mode");
// 	switchBallDarkMode.classList.add("active");
// } else {
// 	document.body.classList.remove("dark-mode");
// 	switchBallDarkMode.classList.remove("active");
// }

// const switchButton = document.querySelector(".css-switch-label");

document.addEventListener("click", (e) => {
	if (e.target.className === "css-switch-input") {
		const switchBall = e.target.nextElementSibling.nextElementSibling;
		const setSwitchButtons = [];

		switchBall.classList.toggle("active");

		const id = e.target.id;
		const status = switchBall.classList.contains("active") ? "active" : "disabled";

		const stateButton = {
			id,
			status,
		};

		setSwitchButtons.push(stateButton);

		console.log(setSwitchButtons);

		localStorage.setItem("switch-buttons-status", JSON.stringify(setSwitchButtons));
	}
});
