const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

function solution(writing) {
  let dict = {};
  for (let i = 97; i <= 122; i++) dict[String.fromCharCode(i)] = 0;
  writing.map((v) => {
    v.split(" ").map((words) => {
      words.split("").map((word) => {
        dict[word] += 1;
      });
    });
  });
  let answer = "";
  let MAX = 0;
  for (let i = 97; i <= 122; i++) {
    if (dict[String.fromCharCode(i)] > MAX) {
      answer = String.fromCharCode(i);
      MAX = dict[String.fromCharCode(i)];
    } else if (dict[String.fromCharCode(i)] === MAX) {
      answer += String.fromCharCode(i);
    }
  }
  return answer;
}

console.log(solution(input));
