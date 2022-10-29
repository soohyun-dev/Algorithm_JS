const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, q] = input[0].split(" ").map(Number);
let nums = input[1].split(" ").map(Number);
let questions = [];
for (let i = 2; i < 2 + q; i++) {
  questions.push(input[i].split(" ").map(Number));
}

function solution(N, Q, Nums, Questions) {
  Nums.sort((a, b) => a - b);
  for (let i = 1; i < N; i++) {
    Nums[i] = Nums[i] + Nums[i - 1];
  }
  Questions.map((v) => {
    let [start, end] = v;
    console.log(start === 1 ? Nums[end - 1] : Nums[end - 1] - Nums[start - 2]);
  });
}
solution(n, q, nums, questions);
