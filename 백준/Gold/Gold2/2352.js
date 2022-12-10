const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [input_N, input_portnumbers] = input.map((v) => v.split(" ").map(Number));

function solution(N, portnumbers) {
  const binarySearch = (target, left, right) => {
    while (left < right) {
      const mid = ~~((left + right) / 2);
      if (LIS[mid] < target) left = mid + 1;
      else right = mid;
    }

    return right;
  };

  const LIS = [];
  portnumbers.forEach((portnumber) => {
    if (LIS.length === 0 || LIS[LIS.length - 1] < portnumber)
      LIS.push(portnumber);
    else {
      const changePlace = binarySearch(portnumber, 0, N - 1);
      LIS[changePlace] = portnumber;
    }
  });

  return LIS.length;
}

console.log(solution(input_N, input_portnumbers));
