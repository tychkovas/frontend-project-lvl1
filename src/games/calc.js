import { game, getRandomNumber } from '../index.js';

const gameTask = 'What is the result of the expression?';

// function roundLogicCalc return ['Question' string, answer string or number]
const roundLogicCalc = () => {
  let numA = getRandomNumber(100);
  let numB = getRandomNumber(100);
  let result = ['Init question', 'Init answer'];

  switch (getRandomNumber(3)) {
    case 1:
      result = [`${numA} + ${numB}`, numA + numB];
      break;
    case 2:
      result = [`${numA} - ${numB}`, numA - numB];
      break;
    case 3:
      numA = getRandomNumber(9);
      numB = getRandomNumber(9);
      result = [`${numA} * ${numB}`, numA * numB];
      break;
    default: console.log('Error operation');
  }

  // console.log(result);
  return result;
};

const startGame = () => game(gameTask, roundLogicCalc);

export default startGame;
