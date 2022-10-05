function solution(my_string, n) {
  let result = "";
  my_string.split("").map((v) => (result += v.repeat(n)));
  return result;
}
