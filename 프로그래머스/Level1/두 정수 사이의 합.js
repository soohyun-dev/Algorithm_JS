function solution(a, b) {
  var answer = 0;
  const [x, y] = [Math.min(a, b), Math.max(a, b)];
  if (x === y) answer = x;
  else {
    for (let i = x; i <= y; i++) {
      answer += i;
    }
  }
  return answer;
}
