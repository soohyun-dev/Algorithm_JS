function solution(n) {
  let nums = Array.from({ length: n }).map((v, i) => i + 1);
  return nums.filter((v) => v % 2 !== 0).sort((a, b) => a - b);
}
