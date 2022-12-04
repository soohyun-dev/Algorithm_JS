const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [input_T, ...input_lines] = input;
input_lines = input_lines.map((v) => v.split(" ").map(Number));

function solution(T, lines) {
  const record = Array.from({ length: T }).fill(0);
  const deleteLine = Array.from({ length: T }, () => []);
  let MAX = 0;

  lines = lines.sort((a, b) => a[0] - b[0]);
  lines.forEach((_, idx) => {
    for (let j = 0; j < T; j++) {
      if (record[idx] < record[j] && lines[j][1] < lines[idx][1]) {
        record[idx] = record[j];
        deleteLine[idx] = [...deleteLine[j]];
      }
    }
    deleteLine[idx].push(idx);
    record[idx] += 1;
    if (record[idx] > MAX) {
      MAX = record[idx];
      target = idx;
    }
  });

  console.log(T - MAX);
  lines.forEach((v, i) => {
    if (!deleteLine[target].includes(i)) console.log(v[0]);
  });
}

solution(Number(input_T), input_lines);
