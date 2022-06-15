const setMargin = () => {
	// const classes = [...document.querySelector("body").children].map((item) => item.tagName).filter((item) => item !== "SCRIPT");
	// const classes = [...document.querySelector("body").children].map((item) => item.classList);
	const classes = document.getElementsByClassName("mt-10");

	console.log(classes);
};

document.addEventListener("DOMContentLoaded", () => {
	setMargin();
});
