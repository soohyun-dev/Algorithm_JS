function solution(n) {
  var answer = [];
  let k = String(n);
  for (let i = k.length - 1; i >= 0; i--) answer.push(Number(k[i]));
  return answer;
}
