const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const Check = (C) => {
  const list = [...new Array(C.length)].map(() => []);

  for (let i = 0; i < C.length; i++) {
    let cnt = 0;
    let dic = [];
    list[i].push(C[i], C[i].length);
    for (let j = 0; j < C[i].length; j++) {
      let num = C[i].charCodeAt([j]);
      if (!isNaN(C[i][j])) {
        cnt += Number(C[i][j]);
      }
      dic.push(num);
    }
    list[i].push(cnt);
    for (let k of dic) {
      list[i].push(k);
    }
  }
  return list;
};

// 입력
const T = input.shift().split().map(Number);

arr = [];
for (let i = 0; i < T; i++) {
  arr.push(input.shift().trim());
}

let result = Check(arr);

result.sort((a, b) => {
  if (a[1] < b[1]) return -1;
  if (a[1] > b[1]) return 1;
  if (a[2] < b[2]) return -1;
  if (a[2] > b[2]) return 1;
  let ind = 2;
  while (ind < a.length) {
    if (a[ind] === b[ind]) {
      ind += 1;
    } else {
      if (a[ind] < b[ind]) return -1;
      if (a[ind] > b[ind]) return 1;
    }
  }
});

for (let i of result) {
  console.log(i[0]);
}
