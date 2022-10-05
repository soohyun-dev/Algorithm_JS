function solution(rsp) {
  let answer = "";
  rsp.split("").map((v) => (answer += v === "2" ? "0" : v === "0" ? "5" : "2"));
  return answer;
}
