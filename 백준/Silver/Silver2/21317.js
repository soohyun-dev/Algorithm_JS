/*
# 요구사항
다음 돌로 이동하는 작은 점프,
다다음 돌로 이동하는 큰 점프,
2개의 돌을 건너 뛰어 이동하는 매우 큰 점프 (딱 한 번만 사용.)
이 세가지를 적절히 분배하여 필요한 에너지의 최솟값을 구하여라.

# 해결전략
우선, 작은 점프와 큰 점프만을 사용해서 각 돌에 도달할 수 있는 최솟값들을 저장.
이후, 만들어진 배열에서 매우 큰 점프를 한번씩 사용했을 때 
기존 값보다 최소일 경우 그 값으로 초기화해줌.
마지막에 담긴 최종값 출력

# 기능목록
1. 작은 점프와 큰 점프만을 사용했을때의 최솟값을 저장.
2. 매우 큰 점프를 모든 경우의 수에서 한 번씩 써보고 min 값으로 초기화 해 줌.
*/

const input = require("fs")
  .readFileSync("././index.txt")
  .toString()
  .trim()
  .split("\n");

const input_N = input.shift();
let [...input_spendEnergy] = input.map((info) =>
  info.trim().split(" ").map(Number)
);
const input_K = input_spendEnergy.pop();

function solution(N, spendEnergy, K) {
  let totalEnergy = Array.from({ length: N }, () => Infinity).fill(0, 0, 1);
  spendEnergy.forEach((spend, idx) => {
    let [smallJump, bigJump] = spend;
    totalEnergy[idx + 1] = Math.min(
      totalEnergy[idx] + smallJump,
      totalEnergy[idx + 1]
    );
    totalEnergy[idx + 2] = Math.min(
      totalEnergy[idx] + bigJump,
      totalEnergy[idx + 2]
    );
  });

  let result = totalEnergy[N - 1];
  for (let i = 3; i < N; i++) {
    let [kEnergy, doSmallJump, doBigJump] = [
      totalEnergy[i - 3] + K,
      Infinity,
      Infinity,
    ];
    for (let j = i; j < N - 1; j++) {
      if (i + 1 <= N) {
        doSmallJump = Math.min(doSmallJump, kEnergy + spendEnergy[j][0]);
      }
      if (i + 2 <= N) {
        doBigJump = Math.min(doBigJump, kEnergy + spendEnergy[j][1]);
      }
      [kEnergy, doSmallJump, doBigJump] = [doSmallJump, doBigJump, Infinity];
    }
    result = Math.min(result, kEnergy);
  }

  return result;
}

console.log(solution(Number(input_N), input_spendEnergy, Number(input_K)));
