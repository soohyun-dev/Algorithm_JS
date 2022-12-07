function solution(s) {
  let words = s.split("");
  let target = s[0];
  let idx = 1;
  let cnt = 0;
  let sameCnt = 1;
  let diffCnt = 0;

  while (true) {
    if (target !== words[idx]) diffCnt += 1;
    else sameCnt += 1;

    if (sameCnt === diffCnt) {
      words = words.splice(idx + 1);
      target = words[0];
      idx = 0;
      cnt += 1;
      sameCnt = 1;
      diffCnt = 0;
    }
    idx += 1;
    console.log(words);
    if (words.length === 0) break;
  }

  console.log(cnt);
}

solution("abracadabra");
