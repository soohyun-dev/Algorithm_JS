/* 
<요구사항>
1. 우선순위를 구분하는게 핵심일듯하다.
2. 괄호 내 연산자 구분하기
3. *,/ 연산이 +.- 연산보다 우선순위이므로 잘 처리
4. 괄호내 괄호 처리가 까다로워 보임

<해결법>
1. 식을 하나씩 확인하여 스택을 사용한다.
2. 알파벳이 나오면 바로 결과값에 더해준다.
3. 여는 괄호가 나오면 store 에 저장해둔다.
4. 닫는 괄호가 나오면 store의 오른쪽 값들 부터 시작해서 
   여는 괄호가 나올때까지 결과값에 더해준다.
   이때, 여는 괄호가 나오면 while문을 종료하고 store에서 여는 괄호 삭제.
5. +,- 연산자는 우선 순위가 낮으므로 괄호내에 있는 상황까지 고려해서 
   여는 괄호가 나올때까지 앞에 먼저 나온 연산자들을 모두 결과값에 더해준다.
6. *,/ 연산자는 우선 순위가 높다. 따라서, 앞 쪽에 먼저 나온 *,/ 연산자를 먼저 계산해줘야하므로
   store에 *,/ 연산자가 저장되어있는지 확인하고 그값들은 결과값에 우선 더해준 뒤에 store에 추가시킨다.
*/

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(exp) {
  let [result, store] = ["", []];
  exp.split("").map((v) => {
    if (/[A-Z]/.test(v)) result += v;
    else {
      if (v === "(") store.push(v);
      else {
        while (store.length) {
          let storeEndV = store[store.length - 1];
          if (storeEndV === "(") break;
          else if (v === "+" || v === "-") {
            if (storeEndV === "(") break;
          } else if (v === "*" || v === "/") {
            if (storeEndV !== "*" && storeEndV !== "/") break;
          }
          result += store.pop();
        }
        if (v === ")") store.pop();
        else store.push(v);
      }
    }
  });
  result = [...result, ...store.reverse()];
  return result.join("");
}

console.log(solution(input));
