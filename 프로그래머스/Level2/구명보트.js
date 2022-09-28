function solution(people, limit) {
  var answer = 0;
  let cnt = 0;
  people.sort((a, b) => a - b);
  let K = people.length;
  let idx = 0;
  while (cnt !== K) {
    let tmp = people.pop();
    cnt += 1;
    while (tmp < limit) {
      tmp += people[idx];
      if (tmp <= limit) {
        idx += 1;
        cnt += 1;
      }
    }
    answer += 1;
  }
  return answer;
}
