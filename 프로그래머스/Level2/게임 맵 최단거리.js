function solution(maps) {
  let answer = 0;
  let [N, M] = [maps.length, maps[0].length];
  let dr = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let dq = [[1, 0, 0]];
  let visited = Array.from(Array(N), () => Array(M).fill(false));
  visited[0][0] = true;
  while (dq.length !== 0) {
    let [Z, X, Y] = dq[0];
    dq = dq.splice(1);
    for (let i of dr) {
      let [mx, my] = [X + i[0], Y + i[1]];
      if (mx >= N || mx < 0 || my >= M || my < 0) continue;
      else {
        if (!visited[mx][my] && maps[mx][my] === 1) {
          dq.push([Z + 1, mx, my]);
          visited[mx][my] = true;
          if (mx === N - 1 && my === M - 1) {
            answer = Z + 1;
            break;
          }
        }
      }
    }
  }
  return answer !== 0 ? answer : -1;
}
