const tnm = (num) => {
  if (num % 2 === 0) num = parseInt(num / 2);
  else {
    num = parseInt(num / 2) + 1;
  }
  return num;
};

function solution(n, a, b) {
  var cnt = 0;
  while (true) {
    [a, b] = [tnm(a), tnm(b)];
    cnt += 1;
    if (a === b) break;
  }

  return cnt;
}
