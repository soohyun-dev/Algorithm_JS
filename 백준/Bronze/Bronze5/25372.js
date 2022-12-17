input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, ...test] = input.map((v) => v.trim().split(''));

test.forEach((v) => {
  if (v.length >= 6 && v.length <= 9) console.log('yes');
  else console.log('no');
});
