const getRandomNumber = () => {
  return new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 10);
    random > 5
      ? resolve(random)
      : reject(new Error(`The random number was lower than 5!`));
  });
};

getRandomNumber()
  .then((randomNumber) => randomNumber * 2)
  .then((randomNumberTimes2) => {
    if (randomNumberTimes2 < 10) {
      throw new Error('random number times 2 error!');
    }
    return randomNumberTimes2 * randomNumberTimes2;
  })
  .then((randomNumberTimes2Square) => console.log(randomNumberTimes2Square))
  .catch((err) => console.log(err));
