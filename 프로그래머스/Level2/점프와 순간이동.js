function solution(n) {
  let cnt = 0;
  while (n !== 0) {
    let S = parseInt(n / 2);
    if (n % 2 !== 0) cnt += 1;
    n = S;
  }

  return cnt;
}
