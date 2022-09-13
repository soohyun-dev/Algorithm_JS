const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, C] = input[0].split(" ");
const arr = input[1].split(" ");

let dict = {};
let dict_i = {};
const order = [];
for (let i = 0; i < N; i++) {
  if (!dict[arr[i]]) {
    dict[arr[i]] = 1;
    dict_i[arr[i]] = i;
    order.push(arr[i]);
  } else {
    dict[arr[i]] += 1;
  }
}
const list = [];

for (i of order) {
  list.push([i, dict[i], dict_i[i]]);
}
list.sort((a, b) => {
  if (a[1] > b[1]) return -1;
  if (a[1] < b[1]) return 1;
  if (a[2] < b[2]) return -1;
  if (a[2] > b[2]) return 1;
});

let answer = "";
for (i of list) {
  for (let j = 0; j < i[1]; j++) {
    answer += i[0] + " ";
  }
}
answer = answer.slice(0, -1);
console.log(answer);
