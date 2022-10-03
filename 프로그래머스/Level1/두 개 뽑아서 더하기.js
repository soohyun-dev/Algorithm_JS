function solution(numbers) {
  var answer = [];
  dict = {};
  let tmp = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      tmp = numbers[i] + numbers[j];
      if (dict[tmp] !== 0) {
        dict[tmp] = 0;
        answer.push(tmp);
      }
    }
  }
  answer.sort((a, b) => a - b);

  return answer;
}
