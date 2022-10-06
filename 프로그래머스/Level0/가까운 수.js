function solution(array, n) {
  let MIN = Infinity;
  let result = 0;
  array.sort((a, b) => b - a);
  for (let i of array) {
    if (MIN >= Math.abs(n - i)) [MIN, result] = [Math.abs(n - i), i];
  }
  return result;
}
