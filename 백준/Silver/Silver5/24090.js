const { exit } = require("process");

const input = require("fs")
  .readFileSync("././index.txt")
  .toString()
  .trim()
  .split("\n");

const [input_N, input_K] = input[0].split(" ").map(Number);
input.shift();
const input_nums = input[0].split(" ").map(Number);

function solution(N, K, nums) {
  const quick_sort = (numbers, start, end) => {
    if (start >= end) return;
    let key = start;
    let i = start + 1;
    let j = end;
    while (i <= j) {
      while (numbers[i] <= numbers[key]) {
        i++;
      }
      while (numbers[j] >= numbers[key] && j > start) {
        j--;
      }
      const tmp = numbers[j];
      let exchange = 0;
      cnt += 1;
      console.log(cnt, numbers, i, j);
      if (i > j) {
        numbers[j] = numbers[key];
        numbers[key] = tmp;
        exchange = numbers[key];
      } else {
        numbers[j] = numbers[i];
        numbers[i] = tmp;
        exchange = numbers[i];
      }
      if (cnt === K) {
        console.log(exchange, tmp);
        exit(0);
      }
    }
    quick_sort(numbers, start, j - 1);
    quick_sort(numbers, j + 1, end);
  };

  let cnt = 0;
  quick_sort(nums, 0, N - 1);
  console.log(-1);
}

solution(input_N, input_K, input_nums);
