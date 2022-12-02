const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const [...info] = input.split(" ").map(Number);

function solution(F, S, G, U, D) {
  const bfs = (s) => {
    let dq = [[s, 0]];
    while (dq.length !== 0) {
      const [now, cnt] = dq[0];
      dq.shift();
      for (let i = 0; i < 2; i++) {
        const move = now + dr[i];
        if (move < 1 || move > F) continue;
        if (move === G) return cnt + 1;
        if (cnt + 1 < floor[move]) {
          floor[move] = cnt + 1;
          dq.push([move, cnt + 1]);
        }
      }
    }
    return "use the stairs";
  };
  const floor = Array.from({ length: F + 1 }).fill(Infinity);
  const dr = [U, -D];
  if (S === G) return 0;

  return bfs(S);
}

console.log(solution(...info));
