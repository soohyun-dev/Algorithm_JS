function solution(my_string) {
  let result = "";
  my_string.split("").map((v) => {
    result += v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase();
  });
  return result;
}
