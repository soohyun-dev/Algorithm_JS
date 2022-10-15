const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let [T, Arr, ...Nums] = input;
Nums = Nums.map((v) => Number(v));

function solution(T, Arr, Nums) {
  Arr = Arr.split("");
  let [cal, idx, result] = [[], 65, 0];
  let dict = {};
  for (let i = 0; i < Nums.length; i++) {
    dict[String.fromCharCode(idx)] = Nums[i];
    idx += 1;
  }
  Arr.map((v) => {
    if (/^[A-Z]*$/.test(v)) cal.push(dict[v]);
    else {
      let [a, b] = [cal.length - 2, cal.length - 1];
      if (v === "+") result = cal[a] + cal[b];
      else if (v === "-") result = cal[a] - cal[b];
      else if (v === "*") result = cal[a] * cal[b];
      else if (v === "/") result = cal[a] / cal[b];
      cal.pop();
      cal.pop();
      cal.push(result);
    }
  });
  return cal[0].toFixed(2);
}

console.log(solution(T, Arr, Nums));
