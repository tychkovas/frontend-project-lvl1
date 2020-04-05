import readlineSync from 'readline-sync';

// Getting to know the player
const acquaint = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default acquaint;
