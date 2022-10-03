function solution(x) {
  let answer = true;
  x = String(x);
  arr = x.split("").map(Number);
  let hap = 0;
  arr.map((v) => (hap += v));
  answer = Number(x) % hap === 0 ? true : false;
  return answer;
}
