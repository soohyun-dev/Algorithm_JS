function solution(progresses, speeds) {
  var answer = [];
  let day = [];
  for (let i = 0; i < progresses.length; i++) {
    let tmp = 100 - progresses[i];
    let v = parseInt(tmp / speeds[i]);
    if (tmp % speeds[i] !== 0) v += 1;
    day.push(v);
  }

  let cnt = 0;
  for (let j = 0; j < day.length; j++) {
    if (cnt <= day[j]) {
      while (cnt <= day[j]) cnt += 1;
      answer.push(1);
    } else answer[answer.length - 1] += 1;
  }
  return answer;
}
