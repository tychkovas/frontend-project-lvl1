import acquaint, { task, gameOver, congratulations } from '../index.js';

const startGame = () => {
  // getting to know the player
  const name = acquaint();
  // start game
  console.log('What is the result of the expression?');
  // Questions to the player
  let trueAnswer = 0;
  let numA = 0;
  let numB = 0;
  let numOper = 0;
  let result = false;
  const rnum = (r) => Math.trunc(Math.random() * r + 1);
  while (trueAnswer < 3) {
    numOper = rnum(3);
    numA = rnum(100);
    numB = rnum(100);
    switch (numOper) {
      case 1:
        result = (task(`${numA} + ${numB}`, numA + numB));
        break;
      case 2:
        result = (task(`${numA} - ${numB}`, numA - numB));
        break;
      case 3:
        numA = rnum(10);
        numB = rnum(10);
        result = (task(`${numA} * ${numB}`, numA * numB));
        break;
      default: console.log('Error operation');
    }
    if (result) {
      trueAnswer += 1;
    } else {
      // wrong answer, losing
      gameOver(name);
      break;
    }
  }
  // win check, congratulations
  if (trueAnswer === 3) congratulations(name);
};

export default startGame;
