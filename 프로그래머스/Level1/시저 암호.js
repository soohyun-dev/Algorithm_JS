function solution(s, n) {
  var answer = "";
  let result = 0;
  let arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) answer += " ";
    for (let j = 0; j < arr[i].length; j++) {
      result = arr[i][j].charCodeAt();
      if (result >= 65 && result <= 90) {
        result += n;
        if (result > 90) result -= 26;
      } else {
        result += n;
        if (result > 122) {
          result -= 122;
          result += 96;
        }
      }

      answer += String.fromCharCode(result);
    }
  }
  return answer;
}
