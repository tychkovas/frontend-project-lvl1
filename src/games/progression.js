import runGame from '../game-engine.js';
import getRandomNumber from '../utils.js';

const gameTask = 'What number is missing in the progression?';

/**
 * Logic work round game progression (arithmetic progression)
 * @returns {[string,string]} return ['round question', 'correct answer']
 */
const getGameProgressionRoundData = () => {
  const firstNum = getRandomNumber(0, 20);
  const difference = getRandomNumber(1, 10);
  const size = getRandomNumber(7, 14);
  const missingIndex = getRandomNumber(0, size - 1);

  const progressionTask = [];
  for (let i = 0; i < size; i += 1) {
    progressionTask.push((i === missingIndex) ? '..' : firstNum + (difference * i));
  }

  const roundQuestion = progressionTask.join(' ');
  const correctAnswer = String(firstNum + difference * missingIndex);
  const roundData = [roundQuestion, correctAnswer];

  return roundData;
};

const startGame = () => runGame(gameTask, getGameProgressionRoundData);

export default startGame;
