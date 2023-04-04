const input = require('fs').readFileSync('././index.txt').toString().trim().split('\n');
const log = console.log;

const inputN = +input[0];
input.shift();
const inputInfo = input.map((v) => v.split(' ').map(Number));

function solution(N, infos) {
  const dr_x = [-1, 0, 1, 0];
  const dr_y = [0, 1, 0, -1];
  const MAP = Array.from(Array(101), () => Array(101).fill(0));
  let answer = 0;

  infos.forEach((info) => {
    const [y, x, d, g] = info;
    const curve = [d];

    for (let i = 0; i < g; i++) {
      for (let j = curve.length - 1; j >= 0; j--) {
        curve.push((curve[j] + 1) % 4);
      }
    }

    for (let i = 0; i < curve.length; i++) {
      const [mx, my] = [x + dr_x[curve[i]], y + dr_y[curve[i]]];
      if (mx < 0 || mx > 100 || my < 0 || my > 100) continue;
      MAP[mx][my] = 1;
    }
  });

  for (let i = 0; i < 101; i++) {
    for (let j = 0; j < 101; j++) {
      if (MAP[i][j] === 1 && MAP[i + 1][j] === 1 && MAP[i][j + 1] === 1 && MAP[i + 1][j + 1] === 1) {
        answer += 1;
      }
    }
  }

  return answer;
}

log(solution(inputN, inputInfo));
