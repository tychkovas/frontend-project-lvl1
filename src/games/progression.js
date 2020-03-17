import { game, rnum } from '../index.js';

const gameTask = 'What number is missing in the progression?';

// Arithmetic progression
// function roundLogic return ['Question' string, answer string or number]
const roundLogic = () => {
  const num1 = rnum(20);
  const d = rnum(10);
  const n = 6 + rnum(8);
  const findInd = rnum(n) - 1;
  // console.log('d='+ d + ' n='+ n +' findInd='+ findInd );
  const decision = num1 + d * findInd;
  const aprogression = [];
  for (let i = 0; i < n; i += 1) {
    aprogression.push((i === findInd) ? '..' : num1 + (d * i));
    // console.log(i + ' : ' + ' ^ ' + aprogression);
  }
  const result = [aprogression.join(' '), decision];
  // console.log(result);
  return result;
};

const startGame = () => game(gameTask, roundLogic);

export default startGame;
