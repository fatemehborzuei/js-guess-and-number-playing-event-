const systemRandomNumber = Math.floor(Math.random() * 100);
const guessForm = document.querySelector("#guessForm");
const resultText = document.querySelector(".result");
const userHp = 10;

function getUserGuess(e) {
    const userGuess = e.target.userGuess.value;

    if (userGuess > systemRandomNumber) {
        resultText.innerHTML = "your number is bigger than answer";
    } else if (userGuess < systemRandomNumber) {
        resultText.innerHTML = "your number is smaller than answer";
    } else if (userGuess == systemRandomNumber) {
        resultText.innerHTML = "you win";
    } else {
        resultText.innerHTML = "invalid answer";
    }
}

guessForm.addEventListener("submit", (e) => {
    getUserGuess(e);
    e.preventDefault();
});
