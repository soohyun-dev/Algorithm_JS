function solution(age) {
  let result = "";
  String(age)
    .split("")
    .map((v) => (result += String.fromCharCode(Number(v) + 97)));
  return result;
}
