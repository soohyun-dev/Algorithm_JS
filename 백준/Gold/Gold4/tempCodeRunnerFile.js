const input = require('fs').readFileSync('././index.txt').toString().trim().split('\n');
const log = console.log;

const inputN = +input[0];
input.shift();
const inputInfo = input.map((v) => v.split(' ').map(Number));

functi