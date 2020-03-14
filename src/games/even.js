import acquaint, { task, gameOver, congratulations } from '../index.js';

const startGame = () => {
    // getting to know the player
    const name = acquaint();
    // start game
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    // Questions to the player
    let trueAnswer = 0;
    let number = -1;
    while (trueAnswer < 3) {
    number = (Math.random() * 100 + 1).toFixed();
    if (task(number, (number % 2 === 0) ? 'yes' : 'no')) {
        trueAnswer += 1;
    } else {
        gameOver(name);
        break;
    }
    }
    if (trueAnswer === 3) congratulations(name);
};

export default startGame;