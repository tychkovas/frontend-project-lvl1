import { game } from '../index.js';

const gameTask = 'What is the result of the expression?';

const rnum = (r) => Math.trunc(Math.random() * r + 1);

// function roundLogicCalc return ['Question' string, answer string or number]
const roundLogicCalc = () => {
  let numA = rnum(100);
  let numB = rnum(100);
  let result = ['Init question', 'Init answer'];

  switch (rnum(3)) {
    case 1:
      result = [`${numA} + ${numB}`, numA + numB];
      break;
    case 2:
      result = [`${numA} - ${numB}`, numA - numB];
      break;
    case 3:
      numA = rnum(9);
      numB = rnum(9);
      result = [`${numA} * ${numB}`, numA * numB];
      break;
    default: console.log('Error operation');
  }

  // console.log(result);
  return result;
};

const startGame = () => game(gameTask, roundLogicCalc);

export default startGame;
