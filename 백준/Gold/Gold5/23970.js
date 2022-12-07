const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [input_N] = input[0].split(" ").map(Number);
input.shift();
const [input_A, input_B] = input.map((v) => v.split(" ").map(Number));

function solution(N, A, B) {
  const sortedA = [...A].sort((a, b) => a - b);
  const dict = {};
  dict[B] = true;
  if (dict[A]) {
    console.log(1);
    return;
  }
  for (let i = N - 1; i >= 0; i--) {
    if (sortedA[i] !== B[i]) break;
    for (let j = 0; j <= i; j++) {
      if (A[j] > A[j + 1]) {
        const tmp = A[j];
        A[j] = A[j + 1];
        A[j + 1] = tmp;
        if (dict[A]) {
          console.log(1);
          return;
        }
      }
    }

    for (let i = 0; i < N - 1; i++) {
      if (A[i] > A[i + 1]) {
        const tmp = A[i];
        A[i] = A[i + 1];
        A[i + 1] = tmp;
        if (dict[A]) {
          console.log(1);
          return;
        }
      }
    }
  }
  console.log(0);
}

solution(input_N, input_A, input_B);
