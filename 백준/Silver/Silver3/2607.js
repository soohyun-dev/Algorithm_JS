const input = require("fs")
  .readFileSync("././index.txt")
  .toString()
  .trim()
  .split("\n");

const input_T = Number(input[0]);
input.shift();
const [...input_words] = input.map((v) => v.trim());

function solution(T, words) {
  const targetDict = {};
  const targetLength = words[0].length;
  let result = 0;
  words[0].split("").forEach((v) => {
    if (targetDict[v]) targetDict[v] += 1;
    else targetDict[v] = 1;
  });

  words = words.splice(1);
  words.forEach((v) => {
    let cnt = 0;
    if (v.length <= targetLength + 1 && v.length >= targetLength - 1) {
      const vDict = {};
      v.split("").forEach((v) => {
        if (vDict[v]) vDict[v] += 1;
        else vDict[v] = 1;
      });
      const vSET = [...new Set(v)];

      vSET.forEach((v) => {
        if (targetDict[v]) cnt += vDict[v];
      });
    }

    console.log(v, cnt);
    if (Math.abs(targetLength - cnt) <= 1 && Math.abs(v.length - cnt) <= 1)
      result += 1;
  });

  return result;
}

console.log(solution(input_T, input_words));
