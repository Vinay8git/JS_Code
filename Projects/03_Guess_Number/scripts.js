let randomNumber = parseInt(Math.random()*100+1);
// let attempts = 0;
let maxAttempts = 10;

const but=document.getElementById('submit');
const userInput = document.getElementById('guess');
const remainingAttempts = document.getElementById('attemptsLeft');
const lowOrHi = document.getElementById('result');
// const attempts = document.getElementById('attempts');
const resetButton = document.getElementById('restart');
const prevG = document.getElementById('previousGuesses');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    but.addEventListener('click', function(e) {
        e.preventDefault();
        let guess = parseInt(userInput.value);
        validateGuess(guess)
    });
    resetButton.addEventListener('click', () => {
        endGame();
    });
}
function validateGuess(guess)
{
    if (isNaN(guess) || guess < 1 || guess > 100) {
        displayMessage('Please enter a number between 1 and 100!');
    }
    else 
    {
        prevGuess.push(guess);
        // attempts.innerHTML = prevGuess.join(', ');
        
        if (numGuess > maxAttempts) {
            displayMessage('Game Over! You have used all your attempts!');
            playGame = false;
            endGame();
        }
        else
        {
            checkGuess(guess);
            displayGuess(guess);
            numGuess++;
        }
    }
    resetButton.addEventListener('click', () => {
        endGame();
    });
}
function checkGuess(guess)
{
    if (guess === randomNumber) {
        displayMessage('Congratulations! You guessed the correct number!');
        playGame = false;
        endGame();
    }
    else if (guess < randomNumber) {
        displayMessage('Your guess is too low!');
    }
    else if (guess > randomNumber) {
        displayMessage('Your guess is too high!');
    }
    resetButton.addEventListener('click', () => {
        endGame();
    });
}
function displayGuess(guess)
{
    prevG.innerHTML += `${guess} `
    remainingAttempts.innerHTML = `${maxAttempts - numGuess + 1 }`;
    resetButton.addEventListener('click', () => {
        endGame();
    });
}
function displayMessage(message)
{
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
    resetButton.addEventListener('click', () => {
        endGame();
    });
}
function endGame()
{
    
    userInput.setAttribute('disabled', '');
    but.setAttribute('disabled', '');
    //Remover Hover effect and pointer from button
    but.style.pointerEvents = 'none';
    but.style.cursor = 'not-allowed';
    but.style.backgroundColor = '#ccc';
    but.style.color = '#999';

    playGame = false;
    resetButton.addEventListener('click', () => {
        newGame();
    });
}
function newGame()
{
    userInput.value = '';
    remainingAttempts.innerHTML = `${maxAttempts}`;
    lowOrHi.innerHTML = '';
    prevG.innerHTML = '';
    randonNumber = parseInt(Math.random()*100+1);
    playGame = true;
    numGuess = 1;
    prevGuess = [];
    userInput.removeAttribute('disabled');
    but.removeAttribute('disabled');
    


}
function resetGame()
{

}