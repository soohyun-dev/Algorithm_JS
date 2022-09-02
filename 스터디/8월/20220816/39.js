const A = "hqllo my namq is hyqwon";
const arr = [];

for (let i = 0; i < A.length; i++) {
  if (A[i] === "q") {
    arr.push("e");
  } else {
    arr.push(A[i]);
  }
}

console.log(arr);

const replaceAQtoE = (string) => string.replace(/q/g, "e");
console.log(replaceAQtoE("hqllo my namq is hyqwon"));
