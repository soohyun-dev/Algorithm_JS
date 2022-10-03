function solution(participant, completion) {
  var answer = [];
  dict = {};
  for (let i of completion) {
    if (!dict[i]) dict[i] = 1;
    else dict[i] += 1;
  }

  for (let j of participant) {
    if (!dict[j]) answer = j;
    else {
      if (dict[j] === 0) answer = j;
      else dict[j] -= 1;
    }
  }
  return answer;
}
