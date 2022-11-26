const N = 5;
const M = 7;

let visitedR = Array(
  Array.from(Array(N), () =>
    Array(Array(Array.from(Array(N), () => Array(M).fill(0))))
  )
);

console.log(visitedR[4][6][4][6]);
