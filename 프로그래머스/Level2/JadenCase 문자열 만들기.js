function solution(s) {
  var answer = "";
  const arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) answer += " ";
    for (let j = 0; j < arr[i].length; j++) {
      if (j === 0) {
        answer += arr[i][j].toUpperCase();
      } else {
        answer += arr[i][j].toLowerCase();
      }
    }
  }
  return answer;
}
