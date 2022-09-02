const { exit } = require("process");

const gwalho = "()(){()}[{}()]}";

const dict = {};
const ex = ["(", ")", "{", "}", "[", "]"];

for (let i = 0; i < ex.length; i++) {
  dict[ex[i]] = 0;
}

for (let i = 0; i < gwalho.length; i++) {
  dict[gwalho[i]] += 1;
}

let left = 0; /* 좌측 괄호 카운트*/
let right = 0; /* 우측 괄호 카운트 */

for (let i = 0; i < ex.length; i++) {
  if (i % 2 == 0) {
    left = dict[ex[i]];
  } else {
    right = dict[ex[i]];
    if (left != right) {
      /* 좌측 괄호 수와 우측 괄호 수가 서로 다르면 NO 출력후 종료 */
      console.log("NO");
      exit(0);
    }
  }
}
console.log("YES");
