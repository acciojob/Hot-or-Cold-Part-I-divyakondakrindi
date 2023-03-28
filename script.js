//your code here
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Keep track of the user's previous guess and the difference between their previous guess and the secret number
let previousGuess;
let previousDifference;

// Function to check the user's guess and update the response
function checkGuess() {
  // Get the user's guess from the input field
  const guess = Number(document.getElementById('guess').value);

  // Clear the input field
  document.getElementById('guess').value = '';

  // If the guess is not a number or is outside the valid range, show an error message
  if (isNaN(guess) || guess < 1 || guess > 100) {
    document.getElementById('response').textContent = 'Please enter a number between 1 and 100.';
    return;
  }

  // If this is the user's first guess, simply tell them to guess higher or lower
  if (!previousGuess) {
    if (guess < secretNumber) {
      document.getElementById('response').textContent = 'Guess higher.';
    } else if (guess > secretNumber) {
      document.getElementById('response').textContent = 'Guess lower.';
    }
  } else {
    // Calculate the difference between the current guess and the secret number
    const currentDifference = Math.abs(guess - secretNumber);

    // If the current guess is closer than the previous guess, tell the user they're getting hotter
    if (previousDifference && currentDifference < previousDifference) {
      if (guess < secretNumber) {
        document.getElementById('response').textContent = 'Getting hotter. Guess higher.';
      } else if (guess > secretNumber) {
        document.getElementById('response').textContent = 'Getting hotter. Guess lower.';
      }
    } else {
      // Otherwise, simply tell the user to guess higher or lower
      if (guess < secretNumber) {
        document.getElementById('response').textContent = 'Guess higher.';
      } else if (guess > secretNumber) {
        document.getElementById('response').textContent = 'Guess lower.';
      }
    }

    // Update the previous guess and difference variables for the next iteration
    previousGuess = guess;
    previousDifference = currentDifference;
  }
}

// Add an event listener to the button to call the checkGuess function when clicked
document.getElementById('button').addEventListener('click', checkGuess);
