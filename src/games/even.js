import { game } from '../index.js';

// function even return ['Question' string, answer string or number]
const even = () => {
  const number = Math.trunc(Math.random() * 100 + 1);

  const result = [number, (number % 2 === 0) ? 'yes' : 'no'];

  // console.log(result);
  return result;
};

const startGame = () => game(even);

export default startGame;
