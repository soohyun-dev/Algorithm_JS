function solution(lottos, win_nums) {
  var answer = [];
  lottos.sort((a, b) => a - b);
  let zero_cnt = 0;
  let ano_cnt = [];
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) zero_cnt += 1;
    else ano_cnt.push(lottos[i]);
  }
  let cnt = 0;
  for (let i of ano_cnt) {
    if (win_nums.includes(i)) cnt += 1;
  }
  let MIN = 7 - cnt;
  let MAX = 7 - cnt - zero_cnt;
  if (MIN === 7) MIN = 6;
  if (MAX === 7) MAX = 6;
  answer = [MAX, MIN];
  return answer;
}
