const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const input_TC = input.map((v) => v.trim().split(/\s+/g).map(Number));

function solution(TC) {
  const binarySearch = (target, left, right) => {
    while (left < right) {
      const mid = ~~((left + right) / 2);
      if (LIS[mid] < target) left = mid + 1;
      else right = mid;
    }
    return right;
  };

  const check = (N, nums) => {
    nums.forEach((num) => {
      if (LIS.length === 0 || LIS[LIS.length - 1] < num) LIS.push(num);
      else {
        const changePlace = binarySearch(num, 0, LIS.length);
        LIS[changePlace] = num;
      }
    });
    return LIS.length;
  };

  let N = 0;
  let LIS = [];
  for (let i = 0; i < TC.length; i++) {
    if (i % 2 === 0) N = TC[i];
    else {
      console.log(check(N, TC[i]));
      LIS = [];
    }
  }
}

solution(input_TC);
