import readlineSync from 'readline-sync';

// Getting to know the player
const acquaint = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// Run a round of the game
// Return true - win or false - loss
const runRound = (text, answerTrue) => {
  console.log(`Question: ${text}`);
  const answer = readlineSync.question('Your answer:');
  let result = false;
  if (typeof answerTrue === 'number') {
    result = Number(answer) === answerTrue;
  } else {
    result = answer === answerTrue;
  }

  if (result) console.log('Correct!');
  else console.log(`"${answer}" is wrogn answer ;(. Correct answer was "${answerTrue}"`);
  return result;
};

const losing = (name) => `Let's try again, ${name}!`;

const congratulations = (name) => `Congratulations, ${name}!`;

const gameOver = (name, isWin) => (isWin ? congratulations(name) : losing(name));

// General logic of brain games
const game = (gameTask, funcRoundLogic) => {
  // getting to know the player
  const name = acquaint();
  // start game
  console.log(gameTask);
  // Questions to the player
  let trueAnswer = 0;
  while (trueAnswer < 3) {
    if (runRound(...funcRoundLogic())) {
      // win check, congratulations
      trueAnswer += 1;
    } else {
      // wrong answer, losing
      break;
    }
  }

  console.log(gameOver(name, (trueAnswer === 3)));
  return (trueAnswer === 3);
};

const rnum = (r) => Math.trunc(Math.random() * r + 1);

export default acquaint;
export {
  game,
  rnum,
};
