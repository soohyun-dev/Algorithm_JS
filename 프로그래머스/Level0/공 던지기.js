function solution(numbers, k) {
  let cnt = 0;
  for (let i = 1; i < k; i++) {
    cnt += 2;
    if (cnt >= numbers.length) cnt -= numbers.length;
  }
  return numbers[cnt];
}
