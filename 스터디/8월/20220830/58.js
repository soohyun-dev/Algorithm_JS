const num = 123456789;

let newNum = String(num);
let arr = "";

for (let i = newNum.length - 1; i >= 0; i--) {
  arr += newNum[i];
  if (i % 3 == 0 && i != 0) {
    arr += ",";
  }
}

let answer = arr.split("").reverse().join("");

console.log(answer);
