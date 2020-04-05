import { game, getRandomNumber } from '../index.js';

const gameTask = 'What is the dataSet of the expression?';

const getSumm = (a, b) => a + b;
const getSub = (a, b) => a - b;
const getMulti = (a, b) => a * b;

const calcOperations = [
  { name: 'summ', display: '+', func: getSumm },
  { name: 'sub', display: '-', func: getSub },
  { name: 'multi', display: '*', func: getMulti },
];

const maxValueNumberDefault = 100;
const maxValueNumberForMultiOper = 9;

// function getGameCalcRoundData
// return ['game round task' string or number, 'answer' string or number]
const getGameCalcRoundData = () => {
  let numA = getRandomNumber(maxValueNumberDefault);
  let numB = getRandomNumber(maxValueNumberDefault);

  const curOperIndex = getRandomNumber(calcOperations.length) - 1;
  const сurOper = calcOperations[curOperIndex];
  if (сurOper.name === 'multi') {
    numA = getRandomNumber(maxValueNumberForMultiOper);
    numB = getRandomNumber(maxValueNumberForMultiOper);
  }

  const roundTask = `${numA} ${сurOper.display} ${numB}`;
  const correctRoundAnswer = сurOper.func(numA, numB);

  const dataSetRoundGame = [roundTask, correctRoundAnswer];

  // console.log(dataSetRoundGame);
  return dataSetRoundGame;
};

const startGame = () => game(gameTask, getGameCalcRoundData);

export default startGame;
