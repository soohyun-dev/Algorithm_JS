function solution(s) {
  var answer = "";
  let arr = s.split("");
  arr = arr.sort().reverse();
  answer += arr.join("");
  return answer;
}
