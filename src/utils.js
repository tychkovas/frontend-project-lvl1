const maxValueNumberDefault = 100;

const getRandomNumber = (r = maxValueNumberDefault) => Math.trunc(Math.random() * r + 1);

export default getRandomNumber;
export {
  getRandomNumber,
};
