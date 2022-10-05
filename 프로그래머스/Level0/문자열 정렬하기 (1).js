function solution(my_string) {
  return my_string
    .split("")
    .filter((v) => !isNaN(v))
    .map((v) => Number(v))
    .sort((a, b) => a - b);
}
