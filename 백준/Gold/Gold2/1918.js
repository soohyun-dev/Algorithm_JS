/* 
요구사항
1. 우선순위를 구분하는게 핵심일듯하다.
2. 괄호 내 연산자 구분하기
3. *,/ 연산이 +.- 연산보다 우선순위이므로 잘 처리
4. 괄호내 괄호 처리가 까다로워 보임

해결법
1. 스택을 사용해서 식을 하나씩 확인한다.
2. 우선순위이니까 부호에 우선순위를 매겨주면 어떨까 싶음
3. 예를 들어 +,- 는 1, *,/ 는 2 그리고 괄호가 싸이면 어떤 부호든 +2, (+1이면 겹치니까)
4. 2,3번 과정은 예외상황이 너무 많음. 풀이법 바꾸자.
5. 열린 괄호와 닫힌 괄호 내의 연산들을 바로바로 붙여주자.
6. +,- 와 *,/ 를 구분해서 store 배열에 담아두다가 한번에 더하는 식으로 풀기.

*/

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(exp) {
  let [result, store] = ["", []];
  exp.split("").map((v) => {
    if (/[A-Z]/.test(v)) result += v;
    else {
      if (v === "(") store.push(v);
      else if (v === ")") {
        while (store.length && store[store.length - 1] !== "(") {
          result += store.pop();
        }
        store.pop();
      } else if (v === "+" || v === "-") {
        while (store.length && store[store.length - 1] !== "(") {
          result += store.pop();
        }
        store.push(v);
      } else if (v === "*" || v === "/") {
        while (
          store.length &&
          (store[store.length - 1] === "*" || store[store.length - 1] === "/")
        ) {
          result += store.pop();
        }
        store.push(v);
      }
    }
  });
  result = [...result, ...store.reverse()];
  return result.join("");
}

console.log(solution(input));

//G*(A-B*(C/D*H+E)/F)
// GABCD/H*E+*F/-*
// *(-*(+/)/)
// *-*
