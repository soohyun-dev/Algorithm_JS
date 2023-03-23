const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const inputNM = input.shift().split(' ').map(Number);
const inputTest = input.map((v) => v.trim());
const log = console.log;

function solution(N, M, test) {
  const pokemon = {};
  const orderNumber = {};
  for (let i = 0; i < N; i++) {
    pokemon[test[i]] = i + 1;
    orderNumber[i + 1] = test[i];
  }

  for (let j = N; j < N + M; j++) {
    if (isNaN(test[j])) log(pokemon[test[j]]);
    else log(orderNumber[test[j]]);
  }
}

solution(...inputNM, inputTest);
