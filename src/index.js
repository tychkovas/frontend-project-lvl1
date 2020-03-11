import readlineSync from 'readline-sync';

// gets acquainted with the player
const acquaint = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const task = (num, answerTrue = 'yes') => {
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer:');
  const result = answer === answerTrue;
  if (result) console.log('Correct!');
  else console.log(`"${answer} is wrogn answer ;(. Correct answer was "${answerTrue}"`);
  return result;
};

const gameOver = (name) => console.log(`Let's try again, ${name}!`);

const congratulations = (name) => console.log(`Congratulations, ${name}!`);

export default acquaint;
export { task, gameOver, congratulations };
