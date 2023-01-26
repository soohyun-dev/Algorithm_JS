function solution(chicken) {
  let result = 0;
  let cnt = chicken;
  const order = (c) => {
    return ~~(c / 10);
  };

  while (order(cnt) !== 0) {
    result += order(cnt);
    cnt = (cnt % 10) + order(cnt);
  }
  return result;
}
