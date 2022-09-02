const { exit } = require("process");

const check = (list) => {
  let tmp = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] != tmp + 1) {
      return "NO";
    } else {
      tmp += 1;
    }
  }
  return "YES";
};

const arr1 = [1, 4, 2, 6, 3];
// const arr2 = [1, 2, 3, 4, 5];  예시2

console.log(check(arr1));
