const input = require("fs")
  .readFileSync("././index.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());
const [T, ...Str] = input;

function solution(T, Str) {
  let dict = {};
  Str.map((S) => {
    let answer = 0;
    for (let i = 65; i <= 90; i++) dict[String.fromCharCode(i)] = i;
    S.split("").map((v) => {
      dict[v] = 0;
    });
    for (let j = 65; j <= 90; j++)
      if (dict[String.fromCharCode(j)] !== 0)
        answer += dict[String.fromCharCode(j)];
    console.log(answer);
  });
}

solution(T, Str);
