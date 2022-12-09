const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [input_N, input_nums] = input.map((v) => v.split(" ").map(Number));

function solution(N, nums) {
  const binarySearch = (target, left, right) => {
    while (left < right) {
      let mid = ~~((left + right) / 2);
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
  const result = [];
  const LIS = [nums[0]];

  for (let i = 1; i < N; i++) {
    place[i][0] = nums[i];
    if (LIS[LIS.length - 1] < nums[i]) {
      place[i][1] = LIS.length;
      LIS.push(nums[i]);
    } else {
      const changePlace = binarySearch(nums[i], 0, LIS.length - 1);
      place[i][1] = changePlace;
      LIS[changePlace] = nums[i];
    }
  }

  if (LIS.length === 0) {
    console.log(0);
    return;
  }

  let inclusion = LIS.length - 1;
  for (let i = N - 1; i >= 0; i--) {
    if (inclusion === place[i][1]) {
      result.push(place[i][0]);
      inclusion -= 1;
    }
  }

  console.log(result.length);
  console.log(result.reverse().join(" "));
}

solution(input_N, input_nums);
