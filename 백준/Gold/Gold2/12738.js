const input = require("fs")
  .readFileSync("././index.txt")
  .toString()
  .trim()
  .split("\n");

const input_N = Number(input[0]);
input.shift();
const input_nums = input[0].split(" ").map(Number);

function solution(N, nums) {
  const binarySearch = (target, left, right) => {
    while (left < right) {
      const mid = ~~((left + right) / 2);
      if (LIS[mid] < target) left = mid + 1;
      else right = mid;
    }

    return right;
  };

  const place = Array.from({ length: N }, () => [0, 0]).fill(
    [nums[0], 0],
    0,
    1
  );
  const LIS = [nums[0]];
  const result = [];
  let inclusion = 0;

  for (let i = 1; i < N; i++) {
    place[i][0] = nums[i];
    if (LIS[LIS.length - 1] < nums[i]) {
      place[i][1] = LIS.length;
      LIS.push(nums[i]);
    } else {
      const exchangePlace = binarySearch(nums[i], 0, LIS.length - 1);
      place[i][1] = exchangePlace;
      LIS[exchangePlace] = nums[i];
    }
  }
  if (LIS.length === 0) return 0;

  console.log(place);
  place.forEach((target) => {
    if (inclusion === target[1]) {
      result.push(target[0]);
      inclusion += 1;
    }
  });

  return result.length;
}

console.log(solution(input_N, input_nums));
