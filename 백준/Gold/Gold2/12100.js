const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [input_N, ...input_board] = input.map((v) => v.trim().split(' ').map(Number));

function solution(N, board) {
  const direction = [0, 1, 2, 3];
  const dr_x = [-1, 0, 1, 0];
  const dr_y = [0, 1, 0, -1];

  const dfs = (nowOrder, cnt, nowBoard) => {
    let visited = {};
    if (nowOrder === 0) {
      for (let j = 0; j < N; j++) {
        for (let i = 0; i < N; i++) {
          if (check(i, j, nowOrder)) continue;
          [nowBoard, visited] = move(i, j, dr_x[nowOrder], dr_y[nowOrder], nowBoard, visited);
        }
      }
    } else if (nowOrder === 1) {
      for (let i = 0; i < N; i++) {
        for (let j = N - 1; j >= 0; j--) {
          if (check(i, j, nowOrder)) continue;
          [nowBoard, visited] = move(i, j, dr_x[nowOrder], dr_y[nowOrder], nowBoard, visited);
        }
      }
    } else if (nowOrder === 2) {
      for (let j = 0; j < N; j++) {
        for (let i = N - 1; i >= 0; i--) {
          if (check(i, j, nowOrder)) continue;
          [nowBoard, visited] = move(i, j, dr_x[nowOrder], dr_y[nowOrder], nowBoard, visited);
        }
      }
    } else if (nowOrder === 3) {
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          if (check(i, j, nowOrder)) continue;
          [nowBoard, visited] = move(i, j, dr_x[nowOrder], dr_y[nowOrder], nowBoard, visited);
        }
      }
    }
    direction.forEach((dr) => {
      if (cnt < 4) {
        const copy = JSON.parse(JSON.stringify(nowBoard));
        dfs(dr, cnt + 1, copy);
      }
    });
  };

  const check = (i, j, order) => {
    return i + dr_x[order] < 0 || i + dr_x[order] >= N || j + dr_y[order] < 0 || j + dr_y[order] >= N;
  };

  const move = (x, y, drX, drY, nowboard, visited) => {
    let [mx, my] = [x, y];
    while (nowboard[mx + drX][my + drY] === 0 || nowboard[mx + drX][my + drY] === nowboard[mx][my]) {
      if (nowboard[mx + drX][my + drY] === nowboard[mx][my] && nowboard[mx][my] !== 0) {
        if (visited[`${mx + drX}${my + drY}`] === undefined) {
          nowboard[mx + drX][my + drY] *= 2;
          nowboard[mx][my] = 0;
          visited[`${mx + drX}${my + drY}`] = true;
          MAX = Math.max(MAX, nowboard[mx + drX][my + drY]);
        }
        [mx, my] = [mx + drX, my + drY];
        if (mx + drX < 0 || mx + drX >= N || my + drY < 0 || my + drY >= N) break;
        if (nowboard[mx + drX][my + drY] !== 0) break;
      } else {
        nowboard[mx + drX][my + drY] = nowboard[mx][my];
        nowboard[mx][my] = 0;
        [mx, my] = [mx + drX, my + drY];
      }
      if (mx + drX < 0 || mx + drX >= N || my + drY < 0 || my + drY >= N) break;
    }

    return [nowboard, visited];
  };

  let MAX = 0;
  board.forEach((v) => {
    MAX = Math.max(MAX, ...v);
  });
  direction.forEach((dr) => {
    const copy = JSON.parse(JSON.stringify(board));
    dfs(dr, 0, copy);
  });
  if (N === 1) return board[0][0];

  return MAX;
}

console.log(solution(input_N[0], input_board));
