import runGame from '../game-engine.js';
import { getRandomNumber } from '../utils.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

// function getGameEvenRoundData
// return ['game round task' string or number, 'answer' string or number]
const getGameEvenRoundData = () => {
  const roundQuestion = getRandomNumber();
  const correctAnswer = isEven(roundQuestion) ? 'yes' : 'no';

  const roundData = [roundQuestion, correctAnswer];

  // console.log(roundData);
  return roundData;
};

const startGame = () => runGame(gameTask, getGameEvenRoundData);

export default startGame;
