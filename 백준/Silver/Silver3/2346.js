const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const RotateLeft = (nums, a) => {
  if (nums.length < a) a %= nums.length;
  let spliced = nums.splice(nums.length - a, nums.length);
  nums = [...spliced, ...nums];
  return nums;
};

const RotateRight = (nums, a) => {
  if (nums.length < a) a %= nums.length;
  let spliced = nums.splice(0, a);
  nums = [...nums, ...spliced];
  return nums;
};

const T = Number(input[0]);
const arr = input[1].split(" ").map(Number);

dq = [];
for (const [i, e] of arr.entries()) dq.push([i, e]);
let result = [];

while (dq.length !== 0) {
  console.log(dq);
  let [idx, next] = dq.shift();
  result.push(idx + 1);
  if (next > 0) {
    dq = RotateRight(dq, next - 1);
  } else {
    dq = RotateLeft(dq, -next);
  }
}

console.log(result.join(" "));
