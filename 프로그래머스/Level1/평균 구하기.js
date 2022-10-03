function solution(arr) {
  var answer = 0;
  let hap = 0;
  arr.map((v) => (hap += v));
  answer = hap / arr.length;
  return answer;
}
