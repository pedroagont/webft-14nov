const readline = require('readline-promise').default;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Expected output: 'Hello my name is <name>! I like to do <sport> and I think node is <node>'

const answers = [];

rl.questionAsync('Do you like NodeJS? ')
  .then((answer) => {
    if (answer !== 'yes') {
      throw new Error('User doesnt like nodejs');
    }
    answers.push(answer);
    return rl.questionAsync('Whats your name? ');
  })
  .then((answer) => {
    answers.push(answer);
    return rl.questionAsync('Whats your favourite sport? ');
  })
  .then((answer) => {
    answers.push(answer);
    rl.close();

    const nodeAns = answers[0];
    const nameAns = answers[1];
    const sportAns = answers[2];

    console.log(
      `Hello my name is ${nameAns}, I like to do ${sportAns} I think node is ${nodeAns}`
    );
  })
  .then(() => console.log('Process finished!'))
  .catch((err) => console.log(err));
