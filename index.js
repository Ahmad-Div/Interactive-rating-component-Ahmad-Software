

//adding action listener to the buttons
let scorePoint = 0;
const buttons = document.querySelectorAll(".rating-button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", onClickRateButton);
}

function onClickRateButton() {
    for (let i = 0; i < buttons.length; i++) {
        document.querySelectorAll(".rating-button")[i].classList.remove("onClickRateButton");
    }
    const activeButton = this;
    activeButton.classList.add("onClickRateButton");
    scorePoint = activeButton.textContent;
}

//adding action listener to submit button

const submitButton = document.querySelector(".submit");
const currentCard = document.querySelector(".card");
const afterCard = document.querySelector(".final-card");
const scoreTxt = document.querySelector("#score-text");
submitButton.addEventListener("click", onClickSubmitButton);

function onClickSubmitButton() {
    submitButton.classList.add("onClickSubmitButton");
    setTimeout(hideCard, 1000);
}

function hideCard() {
    currentCard.classList.add("hideCard");
    afterCard.classList.add("apearCard");
    scoreTxt.textContent = "You selected " + scorePoint + " out of 5";
}