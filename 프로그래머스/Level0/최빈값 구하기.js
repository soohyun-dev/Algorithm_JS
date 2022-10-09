function solution(array) {
  let arr = [];
  let dict = {};
  for (let i of array) {
    if (dict[i]) dict[i] += 1;
    else {
      dict[i] = 1;
      arr.push(i);
    }
  }
  let result = arr.map((v) => dict[v]).sort((a, b) => b - a);
  result = result.filter((v) => v === result[0]);
  if (result.length !== 1) return -1;
  else {
    for (let i of arr) if (dict[i] === result[0]) return i;
  }
}
