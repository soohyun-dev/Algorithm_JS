let d_cnt = 0;
let c_cnt = 0;
const Change = (k) => {
  let B = k.length;
  let ck = k.filter((v) => v === "1");
  let A = ck.length;
  let N = B - A;
  let result = String(A.toString(2)).split("");
  d_cnt += N;
  return result;
};

function solution(s) {
  var answer = [];
  let tmp = s.split("");
  while (true) {
    if (tmp[0] === "1" && tmp.length === 1) break;
    else {
      tmp = Change(tmp);
      c_cnt += 1;
    }
  }
  answer = [c_cnt, d_cnt];
  return answer;
}
