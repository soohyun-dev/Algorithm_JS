function solution(arr) {
  var answer = [arr[0]];
  let stand = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== stand) {
      answer.push(arr[i]);
      stand = arr[i];
    }
  }
  return answer;
}
