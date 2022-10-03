function solution(x, n) {
  var answer = [];
  let cnt = x;
  for (let i = 0; i < n; i++) {
    answer.push(Number(x));
    x += cnt;
  }
  return answer;
}
