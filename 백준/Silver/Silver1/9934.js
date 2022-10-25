/*
요구사항

첫째줄에, K가 주어지는데 1 이상 2^K 미만의 구간을 나타냄.
둘째줄에는 2^K-1 만큼의 숫자가 주어짐. 이는 트리 왼쪽부터의 순서다.

트리를 계층화하여, 0번 계층부터 K-1 계층 순서대로 출력하여라.
*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [K, ...NUMS] = input;

NUMS = NUMS[0].split(" ").map(Number);
function solution(k, Nodes) {
  let tree = Array.from({ length: k + 1 }).map(() => []);

  const makeTree = (nodes, layer) => {
    let mid = ~~(nodes.length / 2);
    tree[layer].push(nodes[mid]);
    if (nodes.length === 1) return;
    if (layer + 1 <= k) {
      makeTree(nodes.slice(0, mid), layer + 1);
      makeTree(nodes.slice(mid, nodes.length), layer + 1);
    }
  };

  makeTree(Nodes, 1);
  for (let i = 1; i <= k; i++) console.log(tree[i].join(" "));
}

solution(Number(K), NUMS);
