function solution(hp) {
  let cnt = 0;
  ants = [5, 3, 1];
  for (let i of ants) {
    cnt += ~~(hp / i);
    hp = hp % i;
  }
  return cnt;
}
