const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [T, ...nums] = input;

function solution(T, nums) {
  nums = nums.reverse();
  let [store, idx] = [[], 0];
  let answer = Array.from({ length: T }, () => -1);
  nums.map((num) => {
    while (store.length !== 0) {
      if (store.slice(-1)[0][0] > num) {
        answer[idx] = store.slice(-1)[0][0];
        break;
      } else store.pop();
    }
    store.push([num, idx]);
    idx += 1;
  });
  answer = answer.reverse();
  return answer.join(" ");
}
console.log(solution(T[0], nums[0]));
