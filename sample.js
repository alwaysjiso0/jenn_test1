// Kick Start 2022 Sample

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let testCases = 0;
let kids = 0;
let current = 1;

rl.on('line', function (line) {
  if (testCases === 0) {
    testCases = parseInt(line);
  } else if (kids === 0) {
    kids = parseInt(line.split(" ")[1]);
  } else {
    let a = 0;
    line.split(" ").map(x => a += x);
    console.log(`Case #${current}: ${a % kids}`);
    kids = 0;
    current ++;
  }
  if (kids > testCases) {
    rl.close();
  }
});