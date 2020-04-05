import readlineSync from 'readline-sync';
import acquaint from './index.js';

// Run a round of the game
// Return true - win or false - loss
const runRound = (textRoundTask, correctAnswer) => {
  console.log(`Question: ${textRoundTask}`);
  const answerUser = readlineSync.question('Your answer:');
  let result = false;
  if (typeof correctAnswer === 'number') {
    result = Number(answerUser) === correctAnswer;
  } else {
    result = answerUser === correctAnswer;
  }

  if (result) console.log('Correct!');
  else console.log(`"${answerUser}" is wrogn answer ;(. Correct answer was "${correctAnswer}"`);
  return result;
};

const losing = (name) => `Let's try again, ${name}!`;

const congratulations = (name) => `Congratulations, ${name}!`;

const gameOver = (name, isWin) => (isWin ? congratulations(name) : losing(name));

const numberOfRoundsOfGame = 3;

// General logic of brain games
const runGame = (gameTask, funcGetDataRound) => {
  // getting to know the player
  const name = acquaint();
  // start game
  console.log(gameTask);
  // Questions to the player
  let trueAnswer = 0;
  while (trueAnswer < numberOfRoundsOfGame) {
    if (runRound(...funcGetDataRound())) {
      // win check, congratulations
      trueAnswer += 1;
    } else {
      // wrong answer, losing
      break;
    }
  }

  console.log(gameOver(name, (trueAnswer === numberOfRoundsOfGame)));
  return (trueAnswer === numberOfRoundsOfGame);
};

export default runGame;
