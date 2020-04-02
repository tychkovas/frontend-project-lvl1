import { game, getRandomNumber } from '../index.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

// function roundLogicEven return ['Question' string, answer string or number]
const roundLogicEven = () => {
  const number = getRandomNumber(100);

  const result = [number, (number % 2 === 0) ? 'yes' : 'no'];

  // console.log(result);
  return result;
};

const startGame = () => game(gameTask, roundLogicEven);

export default startGame;
