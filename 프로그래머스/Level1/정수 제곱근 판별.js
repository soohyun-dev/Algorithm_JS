function solution(n) {
  var answer = 0;
  let k = parseInt(n ** 0.5);
  if (k ** 2 === n) {
    answer = (k + 1) ** 2;
  } else {
    answer = -1;
  }
  return answer;
}
