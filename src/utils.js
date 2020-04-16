/**
 * Function returns a random number from a given range
 * @param {number} from Start of range
 * @param {number} to End of range (inclusive)
 * @returns {number} Rundom number
 */
const getRandomNumber = (from = 1, to = 100) => (
  Math.trunc(Math.random() * (to - from + 1)) + from
);

export default getRandomNumber;
