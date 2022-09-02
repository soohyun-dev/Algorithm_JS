const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const reverseCheck = (str) => {
  let tmp = str.split("").reverse().join("");
  if (str === tmp) {
    return true;
  }
  return false;
};

console.log(reverseCheck(input) === true ? 1 : 0);
