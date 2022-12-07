const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [input_N, input_K] = input[0].split(" ").map(Number);

function solution(N, K, nums) {
  const del = (stack, K) => {
    stack.pop();
    return [stack, K - 1];
  };
  let stack = [];
  nums.split("").forEach((num) => {
    while (K > 0 && stack.length !== 0 && stack[stack.length - 1] < +num) {
      [stack, K] = del(stack, K);
    }
    stack.push(+num);
  });
  while (K !== 0) {
    [stack, K] = del(stack, K);
  }

  return stack.join("");
}

console.log(solution(input_N, input_K, input[1]));
