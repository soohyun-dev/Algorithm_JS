const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [input_N, input_switches, input_lights] = input.map((v) =>
  v.split(" ").map(Number)
);

function solution(N, switches, lights) {
  const binarySearch = (target, left, right) => {
    while (left < right) {
      const mid = ~~((left + right) / 2);
      if (LIS[mid] < target) left = mid + 1;
      else right = mid;
    }
    return right;
  };

  const place = Array.from({ length: N }, () => [0, 0]);
  const dict = {};
  const position = [];
  const LIS = [];
  const result = [];
  switches.forEach((Switch, idx) => (dict[Switch] = idx));
  lights.forEach((light) => position.push(dict[light]));

  position.forEach((num, idx) => {
    place[idx][0] = num;
    if (LIS.length === 0 || LIS[LIS.length - 1] < num) {
      place[idx][1] = LIS.length;
      LIS.push(num);
    } else {
      const changePlace = binarySearch(num, 0, LIS.length - 1);
      place[idx][1] = changePlace;
      LIS[changePlace] = num;
    }
  });

  let inclusion = LIS.length - 1;
  place.reverse().forEach((v) => {
    if (v[1] === inclusion) {
      result.push(switches[v[0]]);
      inclusion -= 1;
    }
  });

  console.log(result.length);
  console.log(result.sort().join(" "));
}

solution(input_N, input_switches, input_lights);
