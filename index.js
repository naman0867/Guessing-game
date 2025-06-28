let input = document.getElementById("input");
let btn = document.getElementById("btn");
let wrong = document.querySelector('.wrong');
let guesses = document.getElementById("guesses");
let answer = Math.floor(Math.random() * 100) + 1;
console.log("Answer (for debugging):", answer);
let numGuesses = 0;

btn.addEventListener("click", () => {
    guessesNumber();
});

function guessesNumber() {
    let userGuess = Number(input.value);

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        wrong.innerHTML = "Enter a number between 1 and 100";
    } else {
        numGuesses++;
        guesses.innerHTML = "No. of Guesses: " + numGuesses;

        if (userGuess > answer) {
            wrong.innerHTML = "Too High";
            input.value = "";
        } else if (userGuess < answer) {
            wrong.innerHTML = "Too Low";
            input.value = "";
        } else {
            wrong.innerHTML = "🎉 You guessed it right!";
            input.disabled = true;
            btn.disabled = true;
        }
    }
}
