'use strict';

let numberOfChange = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let goalPoint = 0;
let displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const inputNumber = Number(document.querySelector('.guess').value);
  console.log(typeof inputNumber);

  //when there is no input number
  if (!inputNumber) {
    // document.querySelector('.message').textContent = '⛔ No Number';
    displayMessage('⛔ No Number Provided!');
  }
  // when we win the game
  else if (inputNumber === secretNumber) {
    if (numberOfChange > goalPoint) {
      goalPoint = numberOfChange;
      document.querySelector('.highscore').textContent = goalPoint;
    }
    // document.querySelector('.message').textContent = '🥁 Correct Number';
    displayMessage('🥁 Correct Number');
    let guessed = (document.querySelector('.number').textContent =
      secretNumber);
    document.querySelector('body').style.background = '#bbb';

    document.querySelector('.number').style.width = '30rem';

    // when we put wrong number
  } else if (inputNumber !== secretNumber) {
    if (numberOfChange > 1) {
      // document.querySelector('.message').textContent =
      //   inputNumber > secretNumber ? '📈 too High' : '📉 too Low';
      displayMessage(inputNumber > secretNumber ? '📈 too High' : '📉 too Low');
      numberOfChange--;
      document.querySelector('.score').textContent = numberOfChange;
    } else {
      // document.querySelector('.message').textContent = 'You Lost the game😢';
      displayMessage('You Lost the game😢');
    }
  }

  // when input number is greater than a score number
  // else if (inputNumber > secretNumber) {
  //   if (numberOfChange > 1) {
  //     document.querySelector('.message').textContent = '📈 too High';
  //     numberOfChange--;
  //     document.querySelector('.score').textContent = numberOfChange;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost the game😢';
  //   }
  // }
  // when input number is less than a score number
  // else if (inputNumber < secretNumber) {
  //   if (numberOfChange > 1) {
  //     document.querySelector('.message').textContent = '📈 too Low';
  //     numberOfChange--;
  //     document.querySelector('.score').textContent = numberOfChange;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost the Game 😢';
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', () => {
  numberOfChange = 20;
  console.log(numberOfChange);
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = numberOfChange;
  document.querySelector('.number').style.width = '15rem';
  // document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('Start Guessing...');

  document.querySelector('body').style.background = '#222';
  document.querySelector('.guess').value = '';
});

// for help
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let closeModal = document.querySelector('.close-modal');
let openModal = document.querySelector('.btn-help');

let OpenModals = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
let removeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
openModal.addEventListener('click', OpenModals);
closeModal.addEventListener('click', removeModal);
overlay.addEventListener('click', removeModal);

document.addEventListener('keydown', e => {
  console.log(e);

  //if we press esc keyboard and modal does not contain a class of hidden close the modal
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    removeModal();
  }
});
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// console.log(document.querySelector('.number').textContent);
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.score').textContent);
