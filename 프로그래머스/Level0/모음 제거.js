function solution(my_string) {
  let result = my_string
    .split("")
    .filter(
      (v) => v !== "a" && v !== "e" && v !== "i" && v !== "o" && v !== "u"
    );
  return result.join("");
}
