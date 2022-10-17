const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [T, ...nums] = input;
function solution(T, nums) {
  let [store, idx] = [[], 0];
  let answer = Array.from({ length: T }, () => 0);

  nums.map((num) => {
    while (store.length !== 0) {
      if (store.slice(-1)[0][0] > num) {
        answer[idx] = store.slice(-1)[0][1] + 1;
        break;
      } else store.pop();
    }
    store.push([num, idx]);
    idx += 1;
  });

  return answer.join(" ");
}

console.log(solution(T[0], nums[0]));
