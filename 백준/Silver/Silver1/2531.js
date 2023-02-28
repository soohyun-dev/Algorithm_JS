const input = require('fs')
  .readFileSync('././index.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const inputNDKC = input.shift();
const inputSushi = input.map((v) => Number(v));

function solution(N, d, k, c, sushi) {
  let choice = [];
  let MAX = 0;

  for (let i = 0; i < N; i++) {
    if (i + k >= sushi.length) {
      choice = [...sushi.slice(i), ...sushi.slice(0, i + k - sushi.length), c];
    } else choice = [...sushi.slice(i, i + k), c];

    MAX = Math.max([...new Set(choice)].length, MAX);
  }

  return MAX;
}

console.log(solution(...inputNDKC, inputSushi));
