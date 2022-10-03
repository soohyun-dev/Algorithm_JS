const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30];
const day = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

function solution(a, b) {
  var answer = "";
  let cnt = 0;
  for (let i = 0; i < a; i++) {
    cnt += month[i];
  }
  cnt = (cnt + b) % 7;
  answer = day[cnt];

  return answer;
}
