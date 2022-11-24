const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Expected output: 'Hello my name is <name>! I like to do <sport> and I think node is <node>'

const answers = [];

rl.question('What do you think about NodeJS? ', (answer) => {
  answers.push(answer);
  rl.question('Whats your name? ', (answer) => {
    answers.push(answer);
    rl.question('Whats your favourite sport? ', (answer) => {
      answers.push(answer);
      rl.close();

      const nodeAns = answers[0];
      const nameAns = answers[1];
      const sportAns = answers[2];

      console.log(
        `Hello my name is ${nameAns}, I like to do ${sportAns} I think node is ${nodeAns}`
      );
      rl.close();
    });
  });
});
