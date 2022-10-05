function solution(dot) {
  let [x, y] = [dot[0], dot[1]];
  return x > 0 && y > 0 ? 1 : x < 0 && y > 0 ? 2 : x < 0 && y < 0 ? 3 : 4;
}
