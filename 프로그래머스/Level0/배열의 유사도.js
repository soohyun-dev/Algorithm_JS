function solution(s1, s2) {
  let cnt = 0;
  s1.map((v) => {
    if (s2.includes(v)) cnt += 1;
  });
  return cnt;
}
