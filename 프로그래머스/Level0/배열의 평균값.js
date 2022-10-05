function solution(numbers) {
  let total = numbers.reduce((pre, cur) => pre + cur, 0);
  return total / numbers.length;
}
