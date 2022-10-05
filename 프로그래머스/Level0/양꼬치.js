function solution(n, k) {
  let cnt = parseInt(n / 10);
  return n * 12000 + (k - cnt) * 2000;
}
