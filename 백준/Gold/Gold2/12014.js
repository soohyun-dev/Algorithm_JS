const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const input_T = Number(input[0]);
input.shift();
const input_TC = input.map((v) => v.split(" ").map(Number));

function solution(T, TC) {
  for (let Case = 1; Case <= T; Case++) {
    const binarySearch = (target, left, right) => {
      while (left < right) {
        const mid = ~~((left + right) / 2);
        if (LIS[mid] < target) left = mid + 1;
        else right = mid;
      }
      return right;
    };
    const [_, K] = TC[2 * Case - 2];
    const nums = TC[2 * Case - 1];
    const LIS = [];

    nums.forEach((num) => {
      if (LIS.length === 0 || LIS[LIS.length - 1] < num) LIS.push(num);
      else {
        const changePlace = binarySearch(num, 0, LIS.length - 1);
        LIS[changePlace] = num;
      }
    });

    console.log(`Case #${Case}`);
    console.log(LIS.length >= K ? 1 : 0);
  }
}

solution(input_T, input_TC);
