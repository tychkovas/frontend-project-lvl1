import runGame from '../game-engine.js';
import { getRandomNumber } from '../utils.js';

const gameTask = 'What is the dataSet of the expression?';

const getSumm = (a, b) => a + b;
const getSub = (a, b) => a - b;
const getMulti = (a, b) => a * b;

const calcOperations = [
  { name: 'summ', display: '+', func: getSumm },
  { name: 'sub', display: '-', func: getSub },
  { name: 'multi', display: '*', func: getMulti },
];

const rangeNumberForMultiOper = [1, 10];

/**
 * Logic work round game calculator
 * @returns {[string,string]} return ['round question', 'correct answer']
 */
const getGameCalcRoundData = () => {
  let numA = getRandomNumber();
  let numB = getRandomNumber();

  const curOperIndex = getRandomNumber(1, calcOperations.length) - 1;
  const сurOper = calcOperations[curOperIndex];
  if (сurOper.name === 'multi') {
    numA = getRandomNumber(...rangeNumberForMultiOper);
    numB = getRandomNumber(...rangeNumberForMultiOper);
  }

  const roundQuestion = `${numA} ${сurOper.display} ${numB}`;
  const correctAnswer = String(сurOper.func(numA, numB));
  const roundData = [roundQuestion, correctAnswer];

  return roundData;
};

const startGame = () => runGame(gameTask, getGameCalcRoundData);

export default startGame;
