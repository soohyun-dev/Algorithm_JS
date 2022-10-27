/*
*요구사항
첫째 줄에 N이 주어짐.
둘째 줄에 0부터~N-1 까지의 각 노드의 부모노드가 담긴 숫자들이 주어짐.
-1이라면 루트노드를 뜻함.
마지막 줄에 제거할 노드가 주어짐.
노드를 제거하게 되면 그 자식노드들은 다 삭제됨.
제거 후 남은 트리에서의 리프 노드 개수를 출력.

*해결전략
삭제한 노드 자식노드들을 탐색해야하니 무방향 그래프말고 단방향 그래프로 만들어야겠음.

*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const t = input.shift();
const d = input.pop();
const Nums = input[0].split(" ").map(Number);

function solution(T, parentNodes, D) {
  let tree = Array.from({ length: T + 1 }).map(() => []);
  let [start, cnt] = [0, 0];
  parentNodes.map((parent, idx) => {
    if (parent !== -1) tree[parent].push(idx);
    else start = idx;
  });

  if (start === D) return 0;

  tree[parentNodes[D]] = tree[parentNodes[D]].filter(
    (childNode) => childNode !== D
  );
  tree[D] = [];

  function cntLeafNode(startNode) {
    let childNodes = tree[startNode];
    if (childNodes.length === 0) {
      cnt += 1;
      return;
    }
    childNodes.map((child) => {
      cntLeafNode(child);
    });
  }
  cntLeafNode(start);
  return cnt;
}

console.log(solution(Number(t), Nums, Number(d)));
