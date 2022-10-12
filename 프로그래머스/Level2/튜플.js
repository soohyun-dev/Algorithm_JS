function solution(s) {
  let arr = s.split(/}/);
  let A = [];
  for (let i of arr) {
    let B = [];
    let tmp = i.split(/[{,]/);
    for (let j of tmp) if (!isNaN(j) && j !== "") B.push(Number(j));
    if (B.length !== 0) A.push(B);
  }
  A.sort((a, b) => a.length - b.length);
  let result = [];
  for (let j of A) {
    result.push(...j.filter((v) => !result.includes(v)));
  }
  return result;
}
