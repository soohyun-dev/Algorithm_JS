const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const input_T = Number(input[0]);
input.shift();
const [...input_words] = input.map((v) => v.trim());

function solution(T, words) {
  const dict = {};
  const target = words[0].split("");
  let result = 0;
  for (let i = 65; i <= 90; i++) dict[String.fromCharCode([i])] = 0;
  const keys = Object.keys(dict);
  words = words.splice(1);

  target.forEach((letter) => {
    dict[letter] += 1;
  });
  words.forEach((word) => {
    const copyDict = { ...dict };
    let cnt = 0;
    let store = [];
    word.split("").forEach((letter) => {
      copyDict[letter] -= 1;
    });
    keys.forEach((key) => {
      if (0 !== copyDict[key]) {
        cnt += 1;
        store.push(copyDict[key]);
      }
    });

    if (cnt === 2) {
      if (
        (store[0] === 1 && store[1] === -1) ||
        (store[0] === -1 && store[1] === 1)
      )
        result += 1;
    } else if (cnt === 1) {
      if (store[0] === 1 || store[0] === -1) result += 1;
    } else if (cnt === 0) result += 1;
  });

  return result;
}

console.log(solution(input_T, input_words));
