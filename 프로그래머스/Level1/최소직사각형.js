function solution(sizes) {
  var answer = 0;
  let w = 0;
  let h = 0;
  for (let i of sizes) {
    const [MIN, MAX] = [Math.min(...i), Math.max(...i)];
    if (w < MIN) w = MIN;
    if (h < MAX) h = MAX;
  }
  answer = w * h;

  return answer;
}
