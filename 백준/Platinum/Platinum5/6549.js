const input = require("fs")
  .readFileSync("././index.txt")
  .toString()
  .trim()
  .split("\n");

const [...input_tests] = input.map((v) => v.split(" ").map(Number));

function solution(tests) {
  tests.forEach((test) => {
    const [N, start, ...blocks] = test;
    let MAX = 0;
    let width = 0;
    const stack = [[start, 0]];
    if (start !== undefined) {
      blocks.forEach((block, idx) => {
        if (stack[stack.length - 1][0] > block) {
          while (stack[stack.length - 1][0] > block) {
            const [target, targetIdx] = stack.pop();
            if (stack.length === 0) width = idx + 1;
            else width = idx + 1 - stack[stack.length - 1][1];
            MAX = Math.max(MAX, width * target);
            if (stack.length === 0) break;
          }
        }
        stack.push([block, idx + 1]);
      });
      console.log(stack);
      while (stack.length !== 0) {
        const [target, targetIdx] = stack.pop();
        const rectangle = (N + 1 - targetIdx) * target;
        if (MAX < rectangle) MAX = rectangle;
        if (stack.length === 0) MAX = Math.max(MAX, N * target);
      }
      console.log(MAX);
    }
  });
}

solution(input_tests);
