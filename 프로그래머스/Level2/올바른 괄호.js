function solution(s) {
  var answer = true;
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") cnt += 1;
    else if (s[i] === ")") cnt -= 1;
    if (cnt < 0) break;
  }
  if (cnt === 0) answer = true;
  else answer = false;

  return answer;
}
