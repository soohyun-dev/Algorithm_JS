const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
input.shift();
const dict = {};
for (let i = 0; i < N; i++) {
  const key = input[0].trim();
  dict[key] = [];
  input.shift();
  const T = Number(input[0].trim());
  input.shift();
  for (let i = 0; i < T; i++) {
    dict[key] = [...dict[key], input[0].trim()];
    input.shift();
  }
}

for (let i = 0; i < M; i++) {
  const name = input[0].trim();
  input.shift();
  const order = Number(input[0].trim());
  input.shift();
  if (order === 0) {
    let arr = dict[name];
    arr = arr.sort();
    arr.forEach((v) => console.log(v));
  } else if (order === 1) {
    const teams = Object.keys(dict);
    for (let i = 0; i < teams.length; i++) {
      if (dict[teams[i]].includes(name)) {
        console.log(teams[i]);
        break;
      }
    }
  }
}
