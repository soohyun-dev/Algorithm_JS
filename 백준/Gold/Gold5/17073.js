/* 
*요구사항

1번 정점에 저장되어있는 물을 자식노드로 일정한 비율로 나누어 전달.
물을 받은 자식노드에도 그 노드의 자식노드가 있다면, 똑같이 수행한다.
더이상, 물을 전달하지 않을때 물이 담긴 노드들의 평균값을 구하시오.

*해결전략

트리의 간선들을 모두 이은 다음. 1번노드부터 BFS 진행.
이때 물을 1씩 나누지말고, 자식노드의 갯수만큼 나누어서 배분.
최종적으로 각 노드에 0이 아닌 값들의 갯수와 합을 계산하여 나누기.

*기능목록

1. 트리의 간선을 이음. 이때, 양방향 그래프로 저장.  
   (누가 부모인지 간선만 보고 알 수 없음.)
2. 리프 노드의 개수를 구하는 함수. => cntLeafNodes

*주의사항
부모노드 숫자가 무조건 자식노드보다 크다는 보장 없음. => 리프노드 찾기
*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [cntInfo, ...edgeInfo] = input;

function solution(N, W, Edges) {
  function cntLeafNodes(startNode) {
    let deque = [];
    deque.push(startNode);
    let cnt = 0;
    while (deque.length !== 0) {
      parentNode = deque[0];
      deque = deque.splice(1);

      for (let nextNode of Nodes[parentNode]) {
        if (visited[nextNode]) continue;
        visited[nextNode] = true;
        if (Nodes[nextNode].length === 1) {
          cnt += 1;
        } else {
          deque.push(nextNode);
        }
      }
    }
    return cnt;
  }

  let Nodes = Array.from({ length: N + 1 }).map(() => []);
  let visited = Array.from({ length: N + 1 }, () => false).fill(true, 0, 2);
  Edges.map((info) => {
    let [upNode, DownNode] = [info[0], info[1]];
    Nodes[upNode].push(DownNode);
    Nodes[DownNode].push(upNode);
  });
  let leafNode = cntLeafNodes(1);
  let answer = W / leafNode;
  return answer;
}
console.log(solution(cntInfo[0], cntInfo[1], edgeInfo));
