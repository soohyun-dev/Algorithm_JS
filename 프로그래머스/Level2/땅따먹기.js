function solution(land) {
  let answer = 0;
  let arr = land[0];
  for (let i = 1; i < land.length; i++) {
    let tmp = [...arr];
    for (let j = 0; j < 4; j++) {
      let X = 0;
      for (let k = 0; k < 4; k++)
        if (j !== k) X = Math.max(X, tmp[k] + land[i][j]);
      arr[j] = X;
    }
  }
  return Math.max(...arr);
}
