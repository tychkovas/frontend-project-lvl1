import { game, getRandomNumber } from '../index.js';

const gameTask = 'What number is missing in the progression?';

// Arithmetic progression
// function getGameProgressionRoundData
// return ['game round task' string or number, 'answer' string or number]
const getGameProgressionRoundData = () => {
  const maxValueFirstNum = 20;
  const firstNum = getRandomNumber(maxValueFirstNum);
  const maxValueDifference = 10;
  const difference = getRandomNumber(maxValueDifference);
  const baseCntNumbersProgression = 6;
  const maxCntAddNumbersProgression = 8;
  const n = baseCntNumbersProgression + getRandomNumber(maxCntAddNumbersProgression); // ~ [7..14]

  const findInd = getRandomNumber(n) - 1;
  // console.log('d='+ difference + ' n='+ n +' findInd='+ findInd );
  const decision = firstNum + difference * findInd;

  const progressionTask = [];
  for (let i = 0; i < n; i += 1) {
    progressionTask.push((i === findInd) ? '..' : firstNum + (difference * i));
    // console.log(i + ' : ' + ' ^ ' + progressionTask);
  }

  const roundTask = progressionTask.join(' ');
  const correctRoundAnswer = decision;

  const dataSetRoundGame = [roundTask, correctRoundAnswer];
  // console.log(dataSetRoundGame);
  return dataSetRoundGame;
};

const startGame = () => game(gameTask, getGameProgressionRoundData);

export default startGame;
