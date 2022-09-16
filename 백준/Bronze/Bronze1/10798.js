const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

arr = [];
let MAX = 0;
input.map((v) => {
  arr.push(v.trim());
  if (v.length > MAX) MAX = v.length;
});

let result = "";

for (let i = 0; i < MAX; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].length > i) result += arr[j][i];
  }
}
console.log(result);
