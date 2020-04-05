import runGame from '../game-engine.js';
import { getRandomNumber } from '../utils.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

// function getGameEvenRoundData
// return ['game round task' string or number, 'answer' string or number]
const getGameEvenRoundData = () => {
  const roundNumber = getRandomNumber(100);
  const correctRoundAnswer = isEven(roundNumber) ? 'yes' : 'no';

  const dataSetRoundGame = [roundNumber, correctRoundAnswer];

  // console.log(dataSetRoundGame);
  return dataSetRoundGame;
};

const startGame = () => runGame(gameTask, getGameEvenRoundData);

export default startGame;
