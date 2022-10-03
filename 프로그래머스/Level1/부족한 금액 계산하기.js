function solution(price, money, count) {
  var answer = -1;
  let hap = 0;
  for (let i = 1; i <= count; i++) {
    hap += price * i;
  }
  answer = hap - money;
  if (answer < 0) answer = 0;

  return answer;
}
