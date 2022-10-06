function solution(M, N) {
  let [MAX, MIN] = [Math.max(M, N), Math.min(M, N)];
  return MAX - 1 + MAX * (MIN - 1);
}
