N = 18234;

const cal = (num) => {
  let cnt = 0;
  for (let i = 0; i < num.length; i++) {
    cnt += Number(num[i]);
  }
  return cnt;
};

console.log(cal(String(N)));
