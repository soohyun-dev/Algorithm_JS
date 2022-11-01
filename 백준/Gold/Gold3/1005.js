/*
# 요구사항

T개의 테스트케이스.
N개의 건물과 K개의 건설순서 규칙.
각 건물당 건설에 걸리는 시간이 주어짐.
K개의 건설순서가 주어짐.
승리하기 위해 건설해야 할 건물의 번호가 주어짐.
해당 건물을 건설하는데 걸리는 최소시간을 구하시오.

주의! 해당건물 이전에 건설해야할 건물이 있다면 모든 건설을 마쳐야만,
해당 건물을 건설 할 수 있다.
ex) 2 -> 4, 3 -> 4 일 때, 4번 건물을 짓기 위해선 2번,3번 건물이 모두 건설완료 되어야함.
   
# 해결 전략

우선순위가 0인 노드가 루트 노드.
자식노드로 타고 들어가면서 건설시간을 더해준다.
원하는 건물을 짓기 위해 이어져있는 건물들의 각 시간들의 합 중에서 
가장 큰 값이 총 시간에 더할 값이다.
이유는 모든 건물이 완성되어야지만, 원하는 건물을 지을수 있기 때문이다.

# 기능 목록

1. 자식 노드들에 간선을 잇는다.
child 배열에 자식들을 저장한다.

2. 깊이우선탐색으로 원하는 건물이 나올때까지 탐색한다.
그 과정에서 queue에 소요되는 시간들을 저장한다.
결과 값에 원하는 건물을 짓기까지의 소요시간들을 저장한다.

3. 원하는 건물을 짓기까지의 소요시간들중 가장 큰 값을 출력한다.

*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
let input_idx = 1;
let loop = 0;
while (loop < T) {
  const [N, K] = input[input_idx].split(" ").map(Number);
  input_idx += 1;
  const spendTime = input[input_idx].split(" ").map(Number);
  let buildOrder = Array.from({ length: N + 1 }, () => []);
  let rank = Array.from({ length: N + 1 }, () => 0);
  let spendTotal = Array.from({ length: N + 1 }, () => 0);
  input_idx += 1;
  for (let j = 0; j < K; j++) {
    const [front, back] = input[input_idx + j].split(" ").map(Number);
    buildOrder[front].push(back);
    rank[back] += 1;
  }
  input_idx += K;
  let W = Number(input[input_idx]);
  let queue = [];
  rank.forEach((v, idx) => {
    if (v === 0 && idx !== 0) {
      queue.push(idx);
      spendTotal[idx] = spendTime[idx - 1];
    }
  });
  while (queue.length !== 0) {
    let nowBuild = queue.shift();
    for (let nextBuild of buildOrder[nowBuild]) {
      rank[nextBuild] -= 1;
      spendTotal[nextBuild] = Math.max(
        spendTotal[nowBuild] + spendTime[nextBuild - 1],
        spendTotal[nextBuild]
      );

      if (rank[nextBuild] === 0) {
        queue.push(nextBuild);
      }
    }
  }
  console.log(spendTotal[W]);
  input_idx += 1;
  loop += 1;
}
