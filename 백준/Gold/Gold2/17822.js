const input = require('fs').readFileSync('././index.txt').toString().trim().split('\n');
const [inputN, inputM, inputT] = input.shift().split(' ').map(Number);
const inputNums = [];
const inputOrders = [];
for (let i = 0; i < inputN; i++) inputNums.push(input[i].split(' ').map(Number));
for (let j = inputN; j < inputN + inputT; j++) inputOrders.push(input[j].split(' ').map(Number));
const log = console.log;

function solution(N, M, T, nums, orders) {
  const drX = [0, 1, 0, -1];
  const drY = [1, 0, -1, 0];

  const rotateRight = (nums, move) => {
    const spliced = nums.splice(nums.length - move, nums.length);
    return [...spliced, ...nums];
  };

  const rotateLeft = (nums, move) => {
    const spliced = nums.splice(0, move);
    return [...nums, ...spliced];
  };

  orders.forEach((order) => {
    for (let i = order[0]; i <= N; i += order[0]) {
      if (order[1] === 0) {
        nums[i - 1] = rotateRight(nums[i - 1], order[2] % nums[i - 1].length);
      } else {
        nums[i - 1] = rotateLeft(nums[i - 1], order[2] % nums[i - 1].length);
      }
    }

    const copy = JSON.parse(JSON.stringify(nums)); // DeepCopy
    let del = false;
    let [sum, cnt] = [0, 0];

    log(nums);
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (!nums[i][j]) continue;
        let check = false;
        for (let k = 0; k < 4; k++) {
          let [mx, my] = [i + drX[k], j + drY[k]];
          if (mx === -1 || mx === N) continue;
          else if (my === -1) my = M - 1;
          else if (my === M) my = 0;
          if (nums[i][j] === nums[mx][my]) {
            check = true;
            del = true;
            copy[mx][my] = 0;
          }
        }
        if (check) copy[i][j] = 0;
        else {
          cnt += 1;
          sum += nums[i][j];
        }
      }
    }

    nums = copy;

    // 인접한 것 없을 때 => 삭제
    if (!del) {
      const center = sum / cnt;
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
          if (!nums[i][j]) continue;
          if (nums[i][j] > center) nums[i][j] -= 1;
          else if (nums[i][j] < center) nums[i][j] += 1;
        }
      }
    }
  });

  let result = 0;
  nums.forEach((v) => {
    result += v.reduce((pre, cur) => pre + cur, 0);
  });

  return result;
}

log(solution(inputN, inputM, inputT, inputNums, inputOrders));

/*
1 1 2 3
2 5 2 4
3 1 3 5
2 2 1 3


*/
