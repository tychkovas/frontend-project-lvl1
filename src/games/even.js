import { game } from '../index.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

// function roundLogic return ['Question' string, answer string or number]
const roundLogic = () => {
  const number = Math.trunc(Math.random() * 100 + 1);

  const result = [number, (number % 2 === 0) ? 'yes' : 'no'];

  // console.log(result);
  return result;
};

const startGame = () => game(gameTask, roundLogic);

export default startGame;
