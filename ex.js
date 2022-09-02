const fs = require("fs");

// 1. 입력이 한 개일 때
// const input=fs.readFileSync('/dev/stdin').toString().trim();

// 2. 공백으로 구분되어있는 여러개의 값들을 한 줄로 입력 받을 때
// const input=fs.readFilseSync('/dev/stdin').toString().trim().split(' ');

// 3. 여러줄을 입력받을 때
// const input=fs.readlFileSync('/dev/stdin').toString().trim().split('\n');

// 4. 첫 줄에 입력될 갯수에 대한 N이 주어지고,
//    두 번째 줄에서 공백으로 구분된 N개의 입력을 받을 때
// const input = fs.readFileSync("./index.txt").toString().trim().split("\n");
// const arr = input[1].split(" ").map((el) => Number(el));

// 5. 첫 줄에 입력될 행 수에 대한 N 이 주어지고,
//    두 번째 줄 부터 N+1번째 줄까지 공백으로 구분된 입력이 주어질 때
// const input = fs.readFileSync("./index.txt").toString().trim().split("\n");
// const cnt = Number(input[0]);
// const arr = [];
// for (let i = 1; i <= cnt; i++) {
//   arr.push(input[i]);
// }

// console.log(arr);

// 6. 첫 줄에 테스트 케이스의 개수가 주어짐.
//    이후 각 테스트 케이스 첫 줄에 N 이 입력되고, N개의 자연수가 주어질 때
const input = fs.readFileSync("./index.txt").toString().trim(" ").split("\n");
// const cnt = Number(input[0]);
// var num = 1;
// for (let i = 2; i <= cnt * 2; i += 2) {
//   const N = input[num];
//   const arr = input[i].split(" ").map((item) => +item);
//   num += 2;
// }
