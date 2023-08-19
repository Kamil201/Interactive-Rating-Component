const ratingBtnEls = document.querySelectorAll(".rating__btn");
const submitBtnEl = document.querySelector(".rating__submit__btn");
const popupEl = document.querySelector(".rating__popup");
const selectedNumberEL = document.querySelector(".rating__number");
const ratingContainerEl = document.querySelector(".rating__container");



const handleRate = (e) => {
	const btn = e.target;
    const rating = parseInt(btn.getAttribute("data-rating"))
    selectedNumberEL.textContent = `${rating}`

};




ratingBtnEls.forEach((btn) => addEventListener("click", handleRate));