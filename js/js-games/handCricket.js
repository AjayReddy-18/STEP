function randomOf2() {
  const randomToss = (Math.random() * 10) % 2;
  return Math.ceil(randomToss);
}

function randomOf6() {
  const randomToss = (Math.random() * 10) % 6;
  return Math.ceil(randomToss);
}

function toss() {
  console.log(' 1. Head 💀');
  console.log(' 2. Tail 🪙');
  
  const choice = getChoiceOf2();
  return choice === randomOf2();
}

function getChoiceOf2() {
  const choice = prompt('Enter your choice:');

  if (choice !== '1' && choice !== '2') {
    console.log('Invalid Entry, Try again!');
    return getChoiceOf2();
  }
  return +choice;
}

function getChoiceOf6(role) {
  const choice = prompt(role + ':');

  if (choice < '1' || choice > '6' || choice.length !== 1) {
    console.log('Dead Ball!!!');
    return +getChoiceOf6(role);
  }
  return +choice;
}

function getBatOrBall(choice) {
  return choice === 1 ? 'Bat 🏏' : 'Bowl ⚾️';
}

function batOrBowlChoice(tossResult) {
  if (tossResult) {
    console.log(' 1. Batting 🏏');
    console.log(' 2. Bowling ⚾️');

    const choice = getChoiceOf2();
    console.log('You chose to ' + getBatOrBall(choice) + ' first.');
    return choice;
  }

  const computerChoice = randomOf2();
  console.log('Computer chose to ' + getBatOrBall(computerChoice) + ' first.');

  const userFirstInnings = (computerChoice + 1) % 2;
  console.log('You have to ' + getBatOrBall(userFirstInnings) + ' first.');

  return userFirstInnings;
}

function printTossPrompt(result) {
  const message = result ? 'won' : 'lose';
  console.log('\nYou ' + message + ' the toss.');
}

function playCricket(userRole, target) {
  let computerRole = userRole === 'Batter 🏏' ? 'Bowler ⚾️' : 'Batter 🏏';
  let score = 0;
  let isBatterOut = false;
  let userChoice = 0;
  let computerChoice = 0;

  while (!isBatterOut && score < target) {
    console.log();
    userChoice = getChoiceOf6(userRole);
    computerChoice = randomOf6();
    score += userRole === 'Batter 🏏' ? userChoice : computerChoice;
    console.log(computerRole, ': ' + computerChoice);
    isBatterOut = userChoice === computerChoice;
  }

  console.log();

  if (isBatterOut) {
    console.log('Batter out!');
    return score - (userRole === 'Batter 🏏' ? userChoice : computerChoice);
  }

  console.log('Target reached!');
  return score;
}

function calculateResults(userScore, computerScore) {
  console.log('Your score:', userScore);
  console.log('Computer score:', computerScore);

  if (userScore > computerScore) {
    console.log('You won the match');
  }

  if (userScore < computerScore) {
    console.log('You lose the match');
  }

  if (userScore === computerScore) {
    console.log('Match Drawn!');
  }
}

function userFirstBatting() {
  console.log('\nFirst innings:');
  const userScore = playCricket('Batter 🏏', Infinity);
  console.log('Your score is', userScore);
  console.log('You have to defend', userScore);

  console.log('\nSecond innings:');
  const computerScore = playCricket('Bowler ⚾️', userScore + 1);
  
  calculateResults(userScore, computerScore);
}

function userSecondBatting() {
  console.log('\nFirst innings:');
  const computerScore = playCricket('Bowler ⚾️', Infinity);
  console.log('Your target is', computerScore + 1);

  console.log('\nSecond innings:');
  const userScore = playCricket('Batter 🏏', computerScore + 1);

  calculateResults(userScore, computerScore);
}

function handCricket() {
  const tossResult = toss();
  printTossPrompt(tossResult);
  const userRole = batOrBowlChoice(tossResult);

  if (userRole === 1) {
    return userFirstBatting();
  }

  return userSecondBatting();
}

handCricket();