function solution(s) {
  var answer = "";
  let center = parseInt(s.length / 2);
  if (s.length % 2 === 0) {
    answer += s[center - 1] + s[center];
  } else {
    answer += s[center];
  }
  return answer;
}
