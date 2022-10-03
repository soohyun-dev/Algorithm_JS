function solution(numbers) {
  var answer = 0;
  let arr = [];
  for (let i = 0; i < 10; i++) {
    if (numbers.includes(i) === false) answer += i;
  }
  return answer;
}
