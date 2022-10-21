/*
요구 사항
R : 배열에 있는 수의 순서를 뒤집음.
D : 배열의 첫 번째 수를 버림.
- 빈 배열에 D를 사용하면 'error' 출력.
- 주어진 함수를 실행하고 남은 배열이나 error 출력

해결 전략
우선, R이 두번나오면 원본 배열이니까 이걸 이용해야할듯 하다.
주어진 함수가 기니까 뒤집으라고 다 뒤집으면 시간초과 날 것이 분명.
D는 맨 앞자리를 없애는 거라 splice를 사용해야할 것 같은데, pop 을 쓰는 것이
더 효율적일 것 같으니 처음 주어진 배열을 애초에 뒤집어 넣고 D 가 나오면 pop을 사용하자.
그리고, 마지막에 출력할 때 다시 뒤집어주자.
*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

for (let i = 1; i <= Number(input[0]); i++) {
  let [S, N, Nums] = [
    input[i * 3 - 2],
    Number(input[i * 3 - 1]),
    input[i * 3].slice(1, input[i * 3].length - 1).split(","),
  ];
  let [RUR, check, startIdx, delCnt] = [false, true, 0, 0];
  if (N === 0) Nums = [];
  S.split("").map((v) => {
    if (v === "R") {
      RUR = !RUR;
    } else if (v === "D") {
      if (startIdx + delCnt >= Nums.length) check = false;
      if (RUR) {
        Nums.pop();
        delCnt += 1;
      } else startIdx += 1;
    }
  });
  Nums = Nums.slice(startIdx, Nums.length);
  if (RUR) Nums.reverse();
  console.log(check === true ? "[" + Nums.join(",") + "]" : "error");
}
