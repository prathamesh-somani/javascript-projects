let random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateguess(guess);
  });
}

function validateguess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert(`Please enter number greater than 1`);
  } else if (guess > 100) {
    alert(`Please enter number less than 100`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayguess(guess);
      displaymessage(`Game Over. Random number was ${random}`);
      endgame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === random) {
    displaymessage(`You guessed it Right`);
  } else if (guess > random) {
    displaymessage(`You guessed High`);
  } else (guess < random)[displaymessage(`You guessed Low`)];
}

function displayguess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displaymessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newgame"> Start a new game </h2>`;
  StartOver.appendChild(p);
  playGame = false;
  newgame();
}

function newgame() {
  const button = document.querySelector('#newgame');
  button.addEventListener('click', function (e) {
    random = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = ' ';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    StartOver.removeChild (p)

    playGame = true;
  });
}
