const { exit } = require("process");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [input_N, input_portnumbers] = input.map((v) => v.split(" ").map(Number));

function solution(N, portnumbers) {
  const binarySearch = (target, left, right) => {
    while (left < right) {
      let mid = ~~((left + right) / 2);
      if (LIS[mid] < target) left = mid + 1;
      else right = mid;
    }

    return right;
  };

  const place = Array.from({ length: N }, () => [0, 0]);
  const LIS = [];
  const result = [];
  portnumbers.forEach((portnumber, idx) => {
    place[idx][0] = portnumber;
    if (LIS.length === 0 || LIS[LIS.length - 1] < portnumber) {
      LIS.push(portnumber);
      place[idx][1] = LIS.length - 1;
    } else {
      const changePlace = binarySearch(portnumber, 0, N - 1);
      place[idx][1] = changePlace;
      LIS[changePlace] = portnumber;
    }
  });

  if (LIS.length === 0) {
    console.log(0);
    exit(0);
  }

  let inclusion = LIS.length - 1;

  place.reverse().forEach((target) => {
    if (target[1] === inclusion) {
      result.push(target[0]);
      inclusion -= 1;
    }
  });

  console.log(result.length);
  console.log(result.reverse().join(" "));
}

solution(input_N, input_portnumbers);
