import runGame from '../game-engine.js';
import { getRandomNumber } from '../utils.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

// Returns the greatest common divisor of a number
const gcd = (a, b) => ((b === 0) ? a : gcd(b, a % b));

const rangeNumber = [1, 100];

// function roundLogicGCD
// return ['game round task' string or number, 'answer' string or number]
const getGameGCDRoundData = () => {
  const numA = getRandomNumber(...rangeNumber);
  const numB = getRandomNumber(...rangeNumber);
  const correctAnswer = String(gcd(numA, numB));

  const roundQuestion = `${numA} ${numB}`;

  const roundData = [roundQuestion, correctAnswer];

  // console.log(roundData);
  return roundData;
};

const startGame = () => runGame(gameTask, getGameGCDRoundData);

export default startGame;
