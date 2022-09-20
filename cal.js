function solution(n) {
  var ans = 0;
  let dist = [...Array(n + 1)].fill(Infinity);
  let cnt = 0;
  let dq = [[0, 0]];
  while (dq.length !== 0) {
    let [X, Z] = [dq[0][0], dq[0][1]];
    if (X === n) break;
    let mx = X * 2;
    dq = dq.splice(1);
    if (mx <= n) {
      if (Z < dist[mx]) {
        dq = [[mx, Z], ...dq];
        dist[mx] = Z;
        dist[X + 1] = Z + 1;
      }
    }
    if (Z + 1 < dist[X + 1]) {
      dist[X + 1] = Z + 1;
      dq.push([X + 1, Z + 1]);
    }
  }
  ans = dist[n];

  return ans;
}

function solution(n) {
  let cnt = 0;
  while (n !== 0) {
    let S = parseInt(n / 2);
    if (n % 2 !== 0) cnt += 1;
    n = S;
  }

  return cnt;
}
