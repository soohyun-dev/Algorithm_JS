const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [T, ...Nums] = input;
function solution(T, Nums) {
  let [store, answer] = [[], 0];
  Nums.map((num) => {
    while (store.length !== 0) {
      if (store.slice(-1)[0][0] > num) {
        answer += store.length;
        break;
      } else store.pop();
    }
    store.push([num]);
  });
  return answer;
}

console.log(solution(T, Nums));
