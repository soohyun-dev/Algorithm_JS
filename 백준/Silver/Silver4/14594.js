const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [T, N, ...Orders] = input;

function solution(T, N, orders) {
  orders = [...new Set(orders)];
  rooms = Array.from({ length: T }).fill(0);
  orders.map((order) => {
    for (let i = order[0] - 1; i < order[1] - 1; i++) rooms[i] = 1;
  });
  let cnt = 0;
  rooms.map((v) => {
    if (v === 0) cnt += 1;
  });
  return cnt;
}

console.log(solution(T[0], N[0], Orders));
