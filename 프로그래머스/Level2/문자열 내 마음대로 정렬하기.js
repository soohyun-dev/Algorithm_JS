function solution(strings, n) {
  var answer = [];
  answer = strings.sort((a, b) => {
    let cnt = n;
    if (a.charCodeAt([cnt]) - b.charCodeAt([cnt]) === 0) {
      cnt = 0;
      while (cnt < a.length) {
        if (a.charCodeAt([cnt]) - b.charCodeAt([cnt]) !== 0) {
          break;
        }
        cnt += 1;
      }
    }
    return a.charCodeAt([cnt]) - b.charCodeAt([cnt]);
  });

  return answer;
}
