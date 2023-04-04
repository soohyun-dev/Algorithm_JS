const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const log = console.log;

function solution(N, nums) {
  const cumulativeNums = [];
  let check = true;
  let store = [];
  let tmp = 0;

  nums.forEach((num, idx) => {
    if ((num < 0 && check) || (num > 0 && !check)) {
      store.push(tmp);
      tmp = 0;
      check = !check;
    }
    tmp += num;
    if (idx === N - 1 && nums[N - 1] < tmp) store.push(tmp);
  });

  // nums에 음수 뿐일 때
  if (store.length === 1 && !check) return Math.max(...nums);

  tmp = 0;

  store.forEach((v) => {
    if (tmp + v < 0) tmp = 0;
    else {
      tmp += v;
      cumulativeNums.push(tmp);
    }
  });

  return Math.max(...cumulativeNums);
}

log(solution(+input[0], input[1].split(' ').map(Number)));
