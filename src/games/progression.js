import runGame from '../game-engine.js';
import { getRandomNumber } from '../utils.js';


const gameTask = 'What number is missing in the progression?';

// Arithmetic progression
// function getGameProgressionRoundData
// return ['game round task' string or number, 'answer' string or number]
const getGameProgressionRoundData = () => {
  const rangeFirstNum = [0, 20];
  const firstNum = getRandomNumber(...rangeFirstNum);
  const rangeValueDifference = [1, 10];
  const difference = getRandomNumber(...rangeValueDifference);
  const rangeCntNumbers = [7, 14];
  const cntNumbersProgression = getRandomNumber(...rangeCntNumbers);

  const missingIndex = getRandomNumber(0, cntNumbersProgression - 1);
  // console.log('d='+ difference + ' cntNumbersProgression='+
  // cntNumbersProgression +' missingInd='+ missingInd );
  const decision = firstNum + difference * missingIndex;

  const progressionTask = [];
  for (let i = 0; i < cntNumbersProgression; i += 1) {
    progressionTask.push((i === missingIndex) ? '..' : firstNum + (difference * i));
    // console.log(i + ' : ' + ' ^ ' + progressionTask);
  }

  const roundQuestion = progressionTask.join(' ');
  const correctAnswer = String(decision);

  const roundData = [roundQuestion, correctAnswer];
  // console.log(roundData);
  return roundData;
};

const startGame = () => runGame(gameTask, getGameProgressionRoundData);

export default startGame;
