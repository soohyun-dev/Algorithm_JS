/*
## 요구사항
문자열이 규칙을 만족하는지 확인해라.
문자열은 {A, B, C, D, E, F} 중 0개 또는 1개로 시작해야 한다.
그 다음에는 A가 하나 또는 그 이상 있어야 한다.
그 다음에는 F가 하나 또는 그 이상 있어야 한다.
그 다음에는 C가 하나 또는 그 이상 있어야 한다.
그 다음에는 {A, B, C, D, E, F} 중 0개 또는 1개가 있으며, 더 이상의 문자는 없어야 한다.

## 해결전략
문자열이 입력되면, 스택에 차례대로 담는다.이때, 연속으로 같은단어라면 담지 않는다.
정리된 단어가 규칙에 부합하는지 확인.

## 기능목록
1. 연속되는 단어들을 정리
2. 규칙에 부합하는지 확인.
*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const t = input.shift();
let [...test] = input;
test = test.map((v) => v.trim());

function solution(T, testCase) {
  function buildStack(Str) {
    let stack = [];
    for (let j = 0; j < Str.length; j++) {
      if (stack[stack.length - 1] !== Str[j]) {
        stack.push(Str[j]);
      }
      if (stack.length > 5) return false;
    }
    if (stack.length < 3) return false;
    return checkRule(stack.join(""));
  }

  function checkRule(result) {
    const alpha = ["A", "B", "C", "D", "E", "F"];
    if (result.length === 3) {
      if (result !== "AFC") return false;
      else return true;
    } else if (result.length === 4) {
      for (let i = 0; i < alpha.length; i++) {
        if (alpha[i] + "AFC" === result) return true;
        if ("AFC" + alpha[i] === result) return true;
      }
      return false;
    } else if (result.length === 5) {
      for (let i = 0; i < alpha.length; i++) {
        for (let j = 0; j < alpha.length; j++) {
          if (alpha[i] + "AFC" + alpha[j] === result) return true;
        }
      }
      return false;
    }
    return false;
  }

  for (let i = 0; i < T; i++) {
    let str = testCase[i].split("");
    let result = buildStack(str);
    if (result) {
      console.log("Infected!");
    } else {
      console.log("Good");
    }
  }
}

solution(Number(t), test);
