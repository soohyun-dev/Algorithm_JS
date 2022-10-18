const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [T, ...Nums] = input;
Nums = Nums[0].split(" ").map(Number);

function solution(T, Nums) {
  let dict = {};
  Nums.map((v) => {
    if (dict[v]) dict[v] += 1;
    else dict[v] = 1;
  });
  let [store, idx] = [[], 0];
  let answer = Array.from({ length: T }, () => -1);
  Nums = Nums.reverse();
  Nums.map((num) => {
    while (store.length !== 0) {
      if (store.slice(-1)[0][1] > dict[num]) {
        answer[idx] = store.slice(-1)[0][0]; // 숫자를 넣어줘야함.
        break;
      } else store.pop();
    }
    store.push([num, dict[num], idx]);
    idx += 1;
  });
  return answer.reverse().join(" ");
}

console.log(solution(T, Nums));
