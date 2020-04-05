import { game, getRandomNumber } from '../index.js';

const gameTask = 'Answer "yes" if given number is prime, otherwise answer "no".';

const isPrime = (x) => {
  if (x < 2) return false;
  for (let i = 2; i <= Math.floor(x / 2); i += 1) {
    if (x % i === 0) return false;
  }
  return true;
};

const maxValueNumberDefault = 100;

// function getGamePrimeRoundData
// return ['game round task' string or number, 'answer' string or number]
const getGamePrimeRoundData = () => {
  const number = getRandomNumber(maxValueNumberDefault);

  const answer = isPrime(number);

  const roundTask = number;
  const correctRoundAnswer = (answer) ? 'yes' : 'no';

  const dataSetRoundGame = [roundTask, correctRoundAnswer];
  // console.log(dataSetRoundGame);
  return dataSetRoundGame;
};

const startGame = () => game(gameTask, getGamePrimeRoundData);

export default startGame;
