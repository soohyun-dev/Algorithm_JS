function solution(s) {
  let arr = [];
  for (let i of s.split(" ")) {
    if (i !== "Z") arr.push(Number(i));
    else arr.pop();
  }
  return arr.reduce((pre, cur) => pre + cur, 0);
}
