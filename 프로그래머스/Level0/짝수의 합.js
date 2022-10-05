function solution(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) if (i % 2 === 0) total += i;
  return total;
}
