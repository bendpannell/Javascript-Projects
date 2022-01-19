'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1
let score = 20;
let highScore = 0;

// Display message function
const dispMessage = function(m) {
    document.querySelector('.message').textContent = m;
}

// Check button actions
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    

    if (!guess) {                           // No guess
        dispMessage('No Number!');
        

    } else if (guess === secretNumber) {    // Correct guess
        dispMessage('Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess !== secretNumber){     // Incorrect Guess
        if (score > 1) {
            dispMessage(guess > secretNumber ? 'Too High!' : 'Too Low!')
            score -= 1;
            document.querySelector('.score').textContent = score;
        } else {
            dispMessage('You Lost the Game!');
            
            document.querySelector('.score').textContent = 0;
        }
    }
});

// Again button actions
document.querySelector('.again').addEventListener('click', function() {
    dispMessage('Start Guessing...');
    
    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';

    score = 20;
    document.querySelector('.score').textContent = score;

    document.querySelector('.guess').value = '';

    secretNumber = Math.trunc(Math.random()*20)+1
});