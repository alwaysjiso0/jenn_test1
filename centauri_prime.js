// Kick Start 2022 Centauri Prime

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
let testCases = 0;
let caseNum = 1;

rl.on("line", (line) => {
  if (testCases === 0) {
    testCases = parseInt(line);
  }
  else {
    let name = 'Bob';
    let lastWord = line[line.length - 1];
    if(vowels.includes(lastWord)) {
      name = 'Alice';
    }
    if (lastWord.toLowerCase() === 'y') {
      name = 'nobody'
    }
    console.log(`Case #${caseNum}: ${line} is ruled by ${name}.`);
    caseNum++;
  }
  if (caseNum > testCases) {
    rl.close();
  }
});