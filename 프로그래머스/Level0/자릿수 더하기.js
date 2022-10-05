function solution(n) {
  const result = String(n)
    .split("")
    .map(Number)
    .reduce((pre, cur) => pre + cur, 0);
  return result;
}
