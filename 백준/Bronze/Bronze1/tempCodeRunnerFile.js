const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [input_N, ...input_board] = input.map((v) => v.trim().split(''));

function solution(N, board) {
  let [widthCnt, heightCnt] = [0, 0];
  for (let i = 0; i < N; i++) {
    let [wCnt, hCnt] = [0, 0];
    for (let j = 0; j < N; j++) {
      if (board[i][j] === '.') wCnt += 1;
      else {
        if (wCnt >= 2) widthCnt += 1;
        wCnt = 0;
      }
      if (board[j][i] === '.') hCnt += 1;
      else {
        if (hCnt >= 2) heightCnt += 1;
        hCnt = 0;
      }
    }
    if (wCnt >= 2) widthCnt += 1;
    if (hCnt >= 2) heightCnt += 1;
  }

  return [widthCnt, heightCnt].join(' ');
}

console.log(solution(~~input_N, input_board));
