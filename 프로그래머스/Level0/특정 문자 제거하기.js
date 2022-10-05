function solution(my_string, letter) {
  return my_string
    .split("")
    .filter((v) => v !== letter)
    .join("");
}
