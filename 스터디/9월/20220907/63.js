const S = "복잡한 세상 편하게 살자";

const Check = (s) => {
  const arr = s.split(" ");
  let result = "";
  for (i of arr) {
    result += i[0];
  }
  return result;
};

console.log(Check(S));
