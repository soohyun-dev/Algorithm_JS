function solution(num, k) {
  let result = String(num).indexOf(k) + 1;
  return result === 0 ? -1 : result;
}
