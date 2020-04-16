import runGame from '../game-engine.js';
import getRandomNumber from '../utils.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

/**
 * Logic work round game even ('Parity Check')
 * @returns {[string,string]} return ['round question', 'correct answer']
 */
const getGameEvenRoundData = () => {
  const roundQuestion = getRandomNumber();
  const correctAnswer = isEven(roundQuestion) ? 'yes' : 'no';
  const roundData = [roundQuestion, correctAnswer];

  return roundData;
};

const startGame = () => runGame(gameTask, getGameEvenRoundData);

export default startGame;
