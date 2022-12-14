const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let idx = 0;
while (true) {
  const [input_N, input_M] = input[idx].split(' ').map(Number);
  const dict = {};
  let cnt = 0;
  idx += 1;
  if (input_N === 0 && input_M === 0) break;
  for (let i = 0; i < input_N; i++) {
    dict[input[idx]] = true;
    idx += 1;
  }
  for (let j = 0; j < input_M; j++) {
    if (dict[input[idx]]) cnt += 1;
    idx += 1;
  }
  console.log(cnt);
}
