import runGame from '../game-engine.js';
import { getRandomNumber } from '../utils.js';


const gameTask = 'Find the greatest common divisor of given numbers.';

// Returns the greatest common divisor of a number
const gcd = (a, b) => ((b === 0) ? a : gcd(b, a % b));
const maxValueNumberDefault = 100;

// function roundLogicGCD
// return ['game round task' string or number, 'answer' string or number]
const getGameGCDRoundData = () => {
  const numA = getRandomNumber(maxValueNumberDefault);
  const numB = getRandomNumber(maxValueNumberDefault);
  const decision = gcd(numA, numB);

  const roundTask = `${numA} ${numB}`;

  const dataSetRoundGame = [roundTask, decision];

  // console.log(dataSetRoundGame);
  return dataSetRoundGame;
};

const startGame = () => runGame(gameTask, getGameGCDRoundData);

export default startGame;
