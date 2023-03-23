const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const inputMNH = input.shift().split(' ').map(Number);
const inputBoard = input.map((v) => v.split(' ').map(Number));
const log = console.log;

function solution(M, N, H, board) {
  const dr_x = [-1, 0, 1, 0];
  const dr_y = [0, 1, 0, -1];
  const dr_z = [-1, 1];

  const newBoard = [];
  let dq = [];
  let MAX = 0;

  for (let i = 0; i < H; i++) {
    newBoard.push(board.slice(i * N, (i + 1) * N));
  }

  for (let z = 0; z < H; z++) {
    for (let x = 0; x < N; x++) {
      for (let y = 0; y < M; y++) {
        if (newBoard[z][x][y] === 1) {
          dq.push([z, x, y]);
        }
      }
    }
  }
  /*
  dq.splice(1) 이나 dq.shift() 를 사용해서 풀면 안풀리는 문제다.

  dq.splice(1) => 메모리 초과
  dq.shift() => 시간초과

  이럴때는 dq를 굳이 줄여나아가지 말고 인덱스만 맞게 설정해줘서 탐색하자.
  */
  let cnt = 0;
  while (dq.length !== cnt) {
    const [Z, X, Y] = dq[cnt];
    for (let i = 0; i < 4; i++) {
      const [mx, my] = [X + dr_x[i], Y + dr_y[i]];
      if (mx < 0 || mx >= N || my < 0 || my >= M) continue;
      if (newBoard[Z][mx][my] === 0) {
        newBoard[Z][mx][my] = newBoard[Z][X][Y] + 1;
        dq.push([Z, mx, my]);
      }
    }

    for (let j = 0; j < 2; j++) {
      const mz = Z + dr_z[j];
      if (mz < 0 || mz >= H) continue;
      if (newBoard[mz][X][Y] === 0) {
        newBoard[mz][X][Y] = newBoard[Z][X][Y] + 1;
        dq.push([mz, X, Y]);
      }
    }
    cnt += 1;
  }

  for (let z = 0; z < H; z++) {
    for (let x = 0; x < N; x++) {
      for (let y = 0; y < M; y++) {
        if (newBoard[z][x][y] === 0) {
          return -1;
        }
        MAX = Math.max(newBoard[z][x][y], MAX);
      }
    }
  }

  if (MAX === 1) return 0;
  return MAX - 1;
}

log(solution(...inputMNH, inputBoard));
