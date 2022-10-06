function solution(i, j, k) {
  let cnt = 0;
  for (let n = i; n <= j; n++) {
    String(n)
      .split("")
      .map((v) => {
        if (Number(v) === k) cnt += 1;
      });
  }
  return cnt;
}
