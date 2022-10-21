const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [...Trees] = input;

function solution(Trees) {
  dict = {};
  Trees.map((tree) => {
    if (dict[tree]) dict[tree] += 1;
    else dict[tree] = 1;
  });
  Trees.sort();
  sortedTrees = [...new Set(Trees)];
  sortedTrees.map((tree) => {
    console.log(tree, ((dict[tree] / Trees.length) * 100).toFixed(4));
  });
}

solution(Trees);
