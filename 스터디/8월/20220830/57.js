const num = 1000;

const oneCount = (end) => {
  let cnt = 0;
  for (let i = 0; i <= end; i++) {
    for (let j = 0; j < String(i).length; j++) {
      if (String(i)[j] == "1") {
        cnt += 1;
      }
    }
  }
  return cnt;
};

console.log(oneCount(num));
