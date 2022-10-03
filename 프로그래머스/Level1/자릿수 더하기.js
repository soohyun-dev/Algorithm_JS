function solution(n) {
  var answer = 0;
  let l = String(n);
  for (let i = 0; i < l.length; i++) {
    answer += Number(l[i]);
  }

  return answer;
}
