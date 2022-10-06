function solution(n) {
  let cnt = 1;
  let result = 0;
  while (cnt * result < n) {
    result += 1;
    cnt *= result;
  }
  return result;
}
