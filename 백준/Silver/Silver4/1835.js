const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const T = Number(input);

dq = [T];
for (let i = T - 1; i > 0; i--) {
  dq = [i, ...dq];
  for (let j = 0; j < i; j++) {
    let tmp = dq.splice(dq.length - 1, 1);
    dq = [...tmp, ...dq];
  }
}

console.log(dq.join(" "));
