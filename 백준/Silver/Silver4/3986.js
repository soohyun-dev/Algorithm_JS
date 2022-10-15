const input = require("fs")
  .readFileSync("././index.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [T, ...words] = input;

function solution(T, words) {
  let result = 0;
  words.map((v) => {
    let arr = [];
    v = v.split("");
    for (let word of v) {
      if (arr[arr.length - 1] === word) arr.pop();
      else arr.push(word);
    }
    if (arr.length === 0) result += 1;
  });
  return result;
}
console.log(solution(T, words));
