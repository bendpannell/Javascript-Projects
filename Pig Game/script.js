'use strict';

// Define buttons
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

// Define elements
const scoreEl0 = document.getElementById('score--0');
const scoreEl1 = document.getElementById('score--1');
let currentScoreEl0 = document.getElementById('current--0');
let currentScoreEl1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');

// Define variables
let scores, currentScore, activePlayer, playing;

// Define functions
const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerEl0.classList.toggle('player--active');
    playerEl1.classList.toggle('player--active');
}

const init = function() {
    // Variables
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = 1;

    //DOM elements
    scoreEl0.textContent = 0;
    scoreEl1.textContent = 0;
    currentScoreEl0.textContent = 0;
    currentScoreEl1.textContent = 0;

    // CSS
    diceEl.classList.add('hidden');
    playerEl0.classList.remove('player--winner');
    playerEl0.classList.add('player--active');
    playerEl1.classList.remove('player--winner');
    playerEl1.classList.remove('player--active');

}
// Initialize
 init();

// Roll Die
rollDiceBtn.addEventListener('click', function() {

    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
    
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            
        } else {
            switchPlayer();
    
        }

    }
})

// Hold score
holdBtn.addEventListener('click', function() {
    
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
        playing = 0;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
        diceEl.classList.add('hidden');
    } else {
        switchPlayer();
    }
    
})

// New Game Button
newGameBtn.addEventListener('click', init)
