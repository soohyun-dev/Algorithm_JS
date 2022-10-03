function solution(n) {
  var answer = 0;
  let cnt = 0;
  check = [...new Array(n + 1)].fill(true);
  check[0] = false;
  check[1] = false;
  for (let i = 2; i < 1001; i++) {
    for (let j = i + i; j <= n; j += i) {
      check[j] = false;
    }
  }
  for (let i = 2; i <= n; i++) if (check[i] === true) cnt += 1;
  answer = cnt;
  return answer;
}
