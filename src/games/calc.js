import runGame from '../game-engine.js';
import getRandomNumber from '../utils.js';

const gameTask = 'What is the result of the expression?';

const calcOperations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

/**
 * Logic work round game calculator
 * @returns {[string,string]} return ['round question', 'correct answer']
 */
const getGameCalcRoundData = () => {
  const numberA = getRandomNumber();
  const numberB = getRandomNumber();

  const listOperations = Object.keys(calcOperations);
  const operationIndex = getRandomNumber(0, listOperations.length - 1);
  const operation = listOperations[operationIndex];

  const roundQuestion = `${numberA} ${operation} ${numberB}`;
  const correctAnswer = String(calcOperations[operation](numberA, numberB));
  const roundData = [roundQuestion, correctAnswer];

  return roundData;
};

const startGame = () => runGame(gameTask, getGameCalcRoundData);

export default startGame;
