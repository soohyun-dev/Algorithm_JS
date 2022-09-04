const { exit } = require("process");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = input.shift();

// 홀수는 짝수로 맞춰주기
const flatF = (array) => {
  let i = 0;
  array.map((v) => {
    if (Number(v) % 2 != 0) {
      array[i] = Number(v) + 1;
    } else {
      array[i] = Number(v);
    }
    i += 1;
  });
  return array;
};

for (let i = 0; i < T * 2; i += 2) {
  let arr = input[i + 1].split(" ");
  let K = Number(input[i]);
  let cnt = 0;
  // 초기 평탄화 작업
  arr = flatF(arr);
  let check = arr.every((value) => value === arr[0]);
  // 만약 순환 안 시켜도 되는 경우
  if (arr.length === 1 || check === true) {
    console.log(0);
    continue;
  }
  while (true) {
    let newArr = [];
    for (let j = 0; j < K; j++) {
      if (j === 0) {
        newArr.push(Number(arr[0] / 2) + Number(arr[K - 1] / 2));
      } else {
        newArr.push(Number(arr[j] / 2) + Number(arr[j - 1] / 2));
      }
    }
    // 루프 한번 돌고 꼭 평탄환해주기
    let flatArr = flatF(newArr);
    cnt += 1;
    // 만약 모두 동일할 시 true 리턴
    let check = flatArr.every((value) => value === flatArr[0]);
    if (check === true) {
      break;
    }
    // 배열 초기화
    arr = flatArr;
  }
  console.log(cnt);
}
