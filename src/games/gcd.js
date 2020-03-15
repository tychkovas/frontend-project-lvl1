import { game, rnum } from '../index.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

// Returns the greatest common divisor of a number
const gcd = (a, b) => {
  // console.log(` -- ${a} , ${b}`);
  return ((b === 0) ? a : gcd(b, a % b));
};

// function roundLogicGCD return ['Question' string, answer string or number]
const roundLogicForNumber = () => {
  const numA = rnum(100);
  const numB = rnum(100);
  const decision = gcd(numA, numB);

  const result = [`${numA} ${numB}`, decision];
  // console.log(result);
  return result;
};

const startGame = () => game(gameTask, roundLogicForNumber);

export default startGame;
