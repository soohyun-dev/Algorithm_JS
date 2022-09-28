function solution(n) {
  let arr = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    arr.push((arr[i - 2] + arr[i - 1]) % 1234567);
  }
  return arr[n];
}
