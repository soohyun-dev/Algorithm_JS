function solution(s) {
  var answer = "";
  const arr = s.split(" ").map(Number);
  const [x, y] = [Math.min(...arr), Math.max(...arr)];
  answer += x + " " + y;
  return answer;
}
