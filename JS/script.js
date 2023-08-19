const ratingBtnEls = document.querySelectorAll(".rating__btn");
const submitBtnEl = document.querySelector(".rating__submit__btn");
const popupEl = document.querySelector(".rating__popup");
const selectedNumberEl = document.querySelector(".rating__number");
const ratingContainerEl = document.querySelector(".rating__container");


const handleRate = (e) => {
	const btn = e.target;
	const rating = parseInt(btn.getAttribute("data-rating"));
	selectedNumberEl.textContent = rating;

};

const handleSubmitClick = () => {
	if (selectedNumberEl.textContent !== 0) {
		popupEl.style.display = "block";
		ratingContainerEl.style.display = "none";
	}
};

ratingBtnEls.forEach(btn => btn.addEventListener("click", handleRate));

submitBtnEl.addEventListener("click", handleSubmitClick);
