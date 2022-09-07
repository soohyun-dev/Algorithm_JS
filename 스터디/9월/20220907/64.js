const num = 24;
const A = 7;
const B = 3;
const S = parseInt(num / A);

const Cal = (Num, s) => {
  let cnt = 0;
  for (let i = s; i >= 0; i--) {
    if ((Num - A * i) % B === 0) {
      cnt += i + parseInt((Num - A * i) / B);
      break;
    }
  }
  if (cnt === 0) {
    return -1;
  } else {
    return cnt;
  }
};

console.log(Cal(num, S));
