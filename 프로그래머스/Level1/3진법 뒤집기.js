function solution(n) {
  var answer = 0;
  let tmp = n.toString(3);
  tmp = tmp.split("").reverse().join("");
  answer = parseInt(tmp, 3);
  return answer;
}
