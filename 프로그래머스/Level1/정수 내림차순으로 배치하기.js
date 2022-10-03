function solution(n) {
  var answer = 0;
  n = String(n);
  let k = n.split("").map(Number);
  k.sort((a, b) => b - a);
  answer = Number(k.join(""));
  return answer;
}
