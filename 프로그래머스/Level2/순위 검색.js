function solution(info, query) {
  var answer = [];
  let member = [];
  for (let i of info) {
    let arr = i.split(" ");
    arr[4] = Number(arr[4]);
    member.push(arr);
  }
  for (let k of query) {
    let Arr = k.split("and");
    let TMP = Arr[3].trim().split(" "); // 마지막 값을 점수와 분류하기 위함.
    TMP[1] = Number(TMP[1]);
    Arr = [...Arr.splice(0, 3), ...TMP];
    for (let j = 0; j < 4; j++) Arr[j] = Arr[j].trim();
    let check = [...new Array(member.length)].fill(true);
    for (let i = 0; i < member.length; i++) {
      if (member[i][4] < Arr[4]) check[i] = false;
      else {
        for (let k = 0; k < 4; k++) {
          if (Arr[k] === "-") continue;
          if (member[i][k] !== Arr[k]) {
            check[i] = false;
            break;
          }
        }
      }
    }
    let cnt = 0;
    for (let m of check) if (m === true) cnt += 1;
    answer.push(cnt);
  }
  return answer;
}
