const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const log = console.log;

const T = +input[0];
let idx = 1;
for (let i = 0; i < T; i++) {
  const N = +input[idx];
  const list = [];
  const dict = {};
  let check = true;

  for (let j = 1; j <= N; j++) {
    list.push(input[idx + j].trim());
    dict[input[idx + j].trim()] = true;
  }

  list.forEach((num) => {
    let word = '';
    num.split('').forEach((v, idx) => {
      word += v;
      if (dict[word] && num.length !== idx + 1) {
        check = false;
      }
    });
  });

  idx += N + 1;
  log(check ? 'YES' : 'NO');
}
