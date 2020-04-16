import runGame from '../game-engine.js';
import getRandomNumber from '../utils.js';

const gameTask = 'Answer "yes" if given number is prime, otherwise answer "no".';

const isPrime = (x) => {
  if (x < 2) return false;
  for (let i = 2; i <= Math.floor(x / 2); i += 1) {
    if (x % i === 0) return false;
  }
  return true;
};

const rangeNumber = [1, 150];

/**
 * Logic work round game prime
 * @returns {[string,string]} return ['round question', 'correct answer']
 */
const getGamePrimeRoundData = () => {
  const roundQuestion = getRandomNumber(...rangeNumber);
  const correctAnswer = isPrime(roundQuestion) ? 'yes' : 'no';
  const roundData = [roundQuestion, correctAnswer];

  return roundData;
};

const startGame = () => runGame(gameTask, getGamePrimeRoundData);

export default startGame;
