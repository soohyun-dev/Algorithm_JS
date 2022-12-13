const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [input_T, ...input_TC] = input.map((v) => Number(v));

function solution(T, TC) {
  let idx = 0;
  let boundary = 0;

  while (idx < TC.length - 1) {
    const nums = [];
    boundary += TC[idx] + 1;
    idx += 1;
    while (idx < boundary) {
      nums.push(TC[idx]);
      idx += 1;
    }
    const binarySearch = (target, left, right) => {
      while (left < right) {
        const mid = ~~((left + right) / 2);
        if (LIS[mid] < target) left = mid + 1;
        else right = mid;
      }

      return right;
    };

    const LIS = [];
    nums.forEach((num) => {
      if (LIS.length === 0 || LIS[LIS.length - 1] < num) LIS.push(num);
      else {
        const changePlace = binarySearch(num, 0, LIS.length - 1);
        LIS[changePlace] = num;
      }
    });

    console.log(LIS.length);
  }
}

solution(input_T, input_TC);
