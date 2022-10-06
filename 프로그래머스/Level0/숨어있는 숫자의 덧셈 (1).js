function solution(my_string) {
  let cnt = 0;
  my_string.split("").map((v) => {
    if (!isNaN(v)) cnt += +v;
  });
  return cnt;
}
