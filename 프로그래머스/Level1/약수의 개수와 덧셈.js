const yaksu = (num) => {
  let cnt = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) cnt += 1;
  }
  return cnt;
};

function solution(left, right) {
  var answer = 0;
  for (let j = left; j <= right; j++) {
    result = yaksu(j);
    answer += result % 2 === 0 ? j : -j;
  }
  return answer;
}
