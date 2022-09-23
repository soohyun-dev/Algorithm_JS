function solution(maps) {
  let [N, M] = [maps.length, maps[0].length];
  let dr = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let dq = [[0, 0]];
  let dist = Array.from(Array(N), () => Array(M).fill(Infinity));
  dist[0][0] = 1;
  while (dq.length !== 0) {
    let [X, Y] = dq[0];
    dq = dq.splice(1);
    for (let i of dr) {
      let [mx, my] = [X + i[0], Y + i[1]];
      if (mx >= N || mx < 0 || my >= M || my < 0) continue;
      else {
        if (dist[mx][my] > dist[X][Y] + 1 && maps[mx][my] === 1) {
          dq.push([mx, my]);
          dist[mx][my] = dist[X][Y] + 1;
        }
      }
    }
  }
  return dist[N - 1][M - 1] !== Infinity ? dist[N - 1][M - 1] : -1;
}
