function solution(s) {
  var answer = "";
  let arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) answer += " ";
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 !== 0) {
        answer += arr[i][j].toLowerCase();
      } else {
        answer += arr[i][j].toUpperCase();
      }
    }
  }
  return answer;
}
