const input = require("fs")
  .readFileSync("././index.txt")
  .toString()
  .trim()
  .split("\n");

let [input_T, ...input_lines] = input.map((v) => v.split(" ").map(Number));

function solution(T, lines) {
  const binarySearch = (target, left, right) => {
    while (left < right) {
      const mid = ~~((left + right) / 2);
      if (LIS[mid] < target) left = mid + 1;
      else right = mid;
    }
    return right;
  };
  lines.sort((a, b) => a[0] - b[0]);
  const place = Array.from({ length: T }, () => [0, 0]);
  const dict = {};
  let LIS = [];
  let result = [];

  lines.forEach((line, idx) => {
    place[idx][0] = line[1];
    dict[line[1]] = line[0];
    if (LIS.length === 0 || LIS[LIS.length - 1] < line[1]) {
      place[idx][1] = LIS.length;
      LIS[LIS.length] = line[1];
    } else {
      const changePlace = binarySearch(line[1], 0, LIS.length - 1);
      LIS[changePlace] = line[1];
      place[idx][1] = changePlace;
    }
  });
  let inclusion = LIS.length - 1;
  for (let i = T - 1; i >= 0; i--) {
    if (place[i][1] === inclusion) inclusion -= 1;
    else result[result.length] = dict[place[i][0]];
  }

  console.log(result.length);
  for (let j = result.length - 1; j >= 0; j--) console.log(result[j]);
}

solution(input_T, input_lines);
