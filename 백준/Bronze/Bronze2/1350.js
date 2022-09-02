const input = require("fs")
  .readFileSync("././index.txt")
  .toString()
  .trim()
  .split("\n");

const cntCluster = (cnt, arr, S) => {
  let total = 0;
  for (let i = 0; i < cnt; i++) {
    if (arr[i] % S === 0) {
      total += parseInt(arr[i] / S);
    } else {
      total += parseInt(arr[i] / S) + 1;
    }
  }
  return total;
};

const T = Number(input[0]);

const cluster = input[1].split(" ").map((value) => +value);
const size = Number(input[2]);

console.log(cntCluster(T, cluster, size) * size);
