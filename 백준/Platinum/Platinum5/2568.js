const input = require("fs")
  .readFileSync("././index.txt")
  .toString()
  .trim()
  .split("\n");

let [input_T, ...input_lines] = input;
input_lines = input_lines.map((v) => v.split(" ").map(Number));

function solution(T, lines) {
  const record = Array.from({ length: T }).fill(0);
  const deleteLine = Array.from({ length: T }, () => []);

  lines = lines.sort((a, b) => a[0] - b[0]);
  lines.forEach((_, idx) => {
    for (let j = 0; j < T; j++) {
      if (record[idx] < record[j] && lines[j][1] < lines[idx][1]) {
        record[idx] = record[j];
        deleteLine[idx] = deleteLine[j];
      }
    }
    deleteLine[idx].push(idx);
    record[idx] += 1;
  });

  const result = Math.max(...record);
  console.log(T - result);
  console.log(lines);
  console.log(record);
  console.log(deleteLine);
  deleteLine[T - 1].forEach((v) => {
    console.log(lines[v][0]);
  });

  // 1 2 3 4 6 7 9 10
}

solution(Number(input_T), input_lines);
