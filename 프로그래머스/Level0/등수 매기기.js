function solution(score) {
  let tmp = [...score];
  tmp = tmp.sort((a, b) => b[0] + b[1] - (a[0] + a[1]));
  let dict = {};
  tmp.map((v) => {
    if (!dict[v[0] + v[1]]) dict[v[0] + v[1]] = tmp.indexOf(v) + 1;
  });
  return score.map((v) => dict[v[0] + v[1]]);
}
