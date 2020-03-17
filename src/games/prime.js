import { game, rnum } from '../index.js';

const gameTask = 'Answer "yes" if given number is prime, otherwise answer "no".';

const isPrime = (x) => {
  if (x < 2) return false;
  for (let i = 2; i <= Math.floor(x / 2); i += 1) {
    if (x % i === 0) return false;
  }
  return true;
};


// function roundLogic return ['Question' string, answer string or number]
const roundLogic = () => {
  const number = rnum(100);

  const answer = isPrime(number);
  const result = [number, (answer) ? 'yes' : 'no'];

  // console.log(result);
  return result;
};

const startGame = () => game(gameTask, roundLogic);

export default startGame;
