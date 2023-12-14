function Hint() {
  if (Math.round(n) > 5) {
    console.log('The number to be guessed is greater than 5.');
  } else if (Math.round(n) < 5) {
    console.log('The number to be guessed is lesser than 5.');
  }
}
function Guess() {
  for (let i = 0; i < 3; i++) {
    let g = prompt('Enter your guess:');
    if (Math.round(n) == g) {
      console.log('Success!');
      f = 1;
      break;
    } else if (g < Math.round(n)) {
      console.log('Low!');
    } else if (g > Math.round(n)) {
      console.log('High!');
    }
  }
  if (f != 1) {
    console.log('Failed to guess the number!');
  }
}
let n = Math.random() * 10;
let f = 0;
Hint();
Guess();
