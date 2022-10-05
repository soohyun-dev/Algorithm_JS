function solution(array, n) {
  let cnt = 0;
  array.map((v) => (v === n ? (cnt += 1) : 0));
  return cnt;
}
