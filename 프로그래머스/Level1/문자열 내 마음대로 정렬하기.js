function solution(strings, n) {
  var answer = [];
  answer = strings.sort((a, b) => {
    let cnt = n;
    let A = a.charCodeAt([cnt]);
    let B = b.charCodeAt([cnt]);
    if (A - B === 0) {
      cnt = 0;
      while (cnt < a.length) {
        if (A - B !== 0) {
          break;
        }
        cnt += 1;
      }
    }
    return A - B;
  });

  return answer;
}
