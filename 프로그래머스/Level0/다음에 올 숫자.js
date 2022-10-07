function solution(common) {
  let a = common[1] - common[0];
  let b = +(common[1] / common[0]);
  let k = common.length;
  if (common[k - 2] + a === common[k - 1]) return common[k - 1] + a;
  else return common[k - 1] * b;
}
