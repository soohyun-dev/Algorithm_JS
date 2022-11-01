/*
# 요구사항
첫째줄에 N,M이 주어짐. (N: 학생수, M: 키 비교 횟수)
M개의 키비교가 주어짐. (A,B)
A는 B의 앞에 서야함.
모든 키비교를 입력받고 학생들을 세운 결과를 출력하시오.
답이 여러가지인 경우 아무거나 출력.

# 해결전략
앞쪽에 있는 사람을 뒤쪽에 있는 사람의 부모로 설정한다.
또한, 우선순위를 rank 라는 배열에 저장하면서 각 사람의 우선순위를 부여한다.
뒤쪽에 여러번 나올수록 후순위로 밀리게된다.

모든 입력을 받고도 아직 우선순위가 0이라면 루트노드에 위치한 것이므로
이 값들을 queue에 넣어준다. 루트노드부터 차례대로 내려가면서 각 순위에 맞게 결과값을 더해나아가자.


# 기능목록

*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [input_N, input_M] = input[0];
input.shift();
const input_Case = input;
function solution(N, M, Case) {
  let lineOrder = Array.from({ length: N + 1 }, () => []);
  let rank = Array.from({ length: N + 1 }, () => 0);
  let deque = [];
  let result = [];
  Case.forEach((info) => {
    const [front, back] = info;
    rank[back] += 1;
    lineOrder[front].push(back);
  });
  rank.forEach((ranking, idx) => {
    if (ranking === 0) {
      deque.push(idx);
      result.push(idx);
    }
  });
  while (deque.length !== 0) {
    nowStudent = deque.shift();
    for (const student of lineOrder[nowStudent]) {
      rank[student] -= 1;
      if (rank[student] === 0) {
        result.push(student);
        deque.push(student);
      }
    }
  }
  const answer = result.splice(1).join(" ");
  return answer;
}

console.log(solution(input_N, input_M, input_Case));
