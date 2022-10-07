function solution(balls, share) {
  let [a, b] = [1, 1];
  for (let i = 0; i < share; i++) {
    a *= balls;
    balls -= 1;
  }
  for (let k = share; k > 1; k--) b *= k;
  return +(a / b);
}
