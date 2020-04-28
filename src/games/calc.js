import runGame from '../game-engine.js';
import getRandomNumber from '../utils.js';

const gameTask = 'What is the result of the expression?';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};
const operators = Object.keys(operations);
const operatorsCount = operators.length;

/**
 * Logic work round game calculator
 * @returns {[string, string]} return ['round question', 'correct answer']
 */
const getGameCalcRoundData = () => {
  const numberA = getRandomNumber();
  const numberB = getRandomNumber();
  const operator = operators[getRandomNumber(0, operatorsCount - 1)];

  const roundQuestion = `${numberA} ${operator} ${numberB}`;
  const correctAnswer = String(operations[operator](numberA, numberB));
  const roundData = [roundQuestion, correctAnswer];

  return roundData;
};

const startGame = () => runGame(gameTask, getGameCalcRoundData);

export default startGame;
