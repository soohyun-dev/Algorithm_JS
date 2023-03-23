const input = require('fs').readFileSync('././index.txt').toString().trim().split('\n');

const inputNMK = input.shift().split(' ').map(Number);
const inputOrder = input.map((v) => v.split(' ').map(Number));
const log = console.log;

function solution(N, M, K, order) {
  const dict = {};
  order.forEach((v, idx) => {
    if (idx < N) {
      dict[v[0]] = v[1];
    } else {
      if (v[0] === 1) {
        dict[v[1]] = v[2];
      } else {
        if (dict[v[0]] === undefined) {
        }

        if (v[0] === 2) {
        } else {
        }
      }
    }
  });
}

log(solution(...inputNMK, inputOrder));
