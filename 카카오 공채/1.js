// 2022-09-24
// 소요시간 20분

function solution(today, terms, privacies) {
  let answer = [];
  let dict = {};
  // 기준 날짜
  let Today = today.split(".");
  let [a, b, c] = [parseInt(Today[0]), parseInt(Today[1]), parseInt(Today[2])];
  // terms dict 에 할당
  for (let i of terms) dict[i[0]] = parseInt(i.split(" ")[1]) * 28;
  let idx = 1;
  for (let j of privacies) {
    let PRI = j.split(".");
    let [A, B, C] = [
      parseInt(PRI[0]),
      parseInt(PRI[1]),
      parseInt(PRI[2].split(" ")[0]),
    ];
    let [cnt_y, cnt_m, cnt_d] = [a - A, b - B, c - C];
    let tmp = cnt_y * 28 * 12 + cnt_m * 28 + cnt_d;
    console.log(tmp);
    if (tmp >= dict[PRI[2].split(" ")[1]]) answer.push(idx);
    idx += 1;
  }
  return answer;
}
