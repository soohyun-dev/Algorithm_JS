function solution(absolutes, signs) {
  var answer = 123456789;
  let cnt = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) cnt += absolutes[i];
    else cnt += -absolutes[i];
  }
  answer = cnt;
  return answer;
}
