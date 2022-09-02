const start = 10;
const end = 15;

const cntNums = (num) => {
  let cnt = 0;
  for (let i = 0; i < num.length; i++) {
    cnt += Number(num[i]);
  }
  return cnt;
};

const makeNums = (start, end) => {
  let str = "";
  for (let i = start; i <= end; i++) {
    str += String(i);
  }
  return cntNums(str);
};

console.log(makeNums(start, end));
