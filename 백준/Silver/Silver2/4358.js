const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

function solution(Trees) {
  dict = {};
  Trees.map((tree) => {
    dict[tree] ? (dict[tree] += 1) : (dict[tree] = 1);
  });
  [...new Set(Trees)].sort().map((tree) => {
    console.log(tree, ((dict[tree] / Trees.length) * 100).toFixed(4));
  });
}

solution(input);
