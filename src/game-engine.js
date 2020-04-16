import readlineSync from 'readline-sync';

/**
 * @typedef  {string} TroundQuestion Question round game
 * @typedef  {string} TcorrectAnswer The correct answer to the question of the round of the game
 * @typedef  {[TroundQuestion,string]} TDataRound Round game Dataset
 */

/**
 * Run a round of the game
 * @param {string} roundQuestion Question round game
 * @param {TcorrectAnswer} correctAnswer The correct answer to the question of the round of the game
 * @returns {boolean} Returns `true` if user wins the round, else if he loses `false`
*/
const runRound = (roundQuestion, correctAnswer) => {
  console.log(`Question: ${roundQuestion}`);
  const answerUser = readlineSync.question('Your answer:');
  const result = answerUser === correctAnswer;
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`"${answerUser}" is wrogn answer ;(. Correct answer was "${correctAnswer}"`);
  }
  return result;
};

const numberOfRoundsOfGame = 3;

/**
 * Game engine
 * @description General logic of brain games
 * @param {string} gameTask Game task description
 * @param {() => TDataRound} getDataRound Logic one round game function
 * return question and corresponding answer of the round ['round question', 'correct answer']
 */
const runGame = (gameTask, getDataRound) => {
  // getting to know the player
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);

  // start game
  console.log(gameTask);
  // Questions to the player
  for (let trueAnswer = 0; trueAnswer < numberOfRoundsOfGame; trueAnswer += 1) {
    if (!runRound(...getDataRound())) {
      return console.log(`Let's try again, ${nameUser}!`);
    }
  }
  return console.log(`Congratulations, ${nameUser}!`);
};

export default runGame;
