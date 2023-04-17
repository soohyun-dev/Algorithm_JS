const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const log = console.log;

const inputN = +input[0];
input.shift();
const inputInfo = input.map((v) => v.split(' ').map(Number));

function solution(N, infos) {
  const dr_x = [0, -1, 0, 1];
  const dr_y = [1, 0, -1, 0];
  const MAP = Array.from(Array(101), () => Array(101).fill(0));
  let cnt = 0;

  infos.forEach((info) => {
    let [y, x, d, g] = info;
    const dir = [d]; // 시작 방향 start
    MAP[x][y] = 1;

    // 정해진 세대까지 loop
    for (let i = 0; i < g; i++) {
      // 끝에서부터 반시계방향으로 돌려준다.
      for (let j = dir.length - 1; j >= 0; j--) {
        // 이전 세대를 뒤에서부터 반시계 방향으로 회전시킨 뒤에 누적해서 추가
        dir.push((dir[j] + 1) % 4);
      }
    }

    for (let i = 0; i < dir.length; i++) {
      x += dr_x[dir[i]];
      y += dr_y[dir[i]];
      if (x < 0 || x > 100 || y < 0 || y > 100) {
        continue;
      }
      MAP[x][y] = 1;
    }
  });

  // 정사각형 체크
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      if (MAP[i][j] === 1 && MAP[i + 1][j] === 1 && MAP[i][j + 1] === 1 && MAP[i + 1][j + 1] === 1) {
        cnt += 1;
      }
    }
  }

  return cnt;
}

log(solution(inputN, inputInfo));
