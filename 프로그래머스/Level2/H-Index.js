function solution(citations) {
  var answer = 0;
  citations.sort((a, b) => a - b);
  let HIndex = citations[0];
  let T = citations.length;
  for (let i = 0; i < 1000; i++) {
    if (i > citations[T - 1]) break;
    for (let j = 0; j < T; j++) {
      if (citations[j] >= i && T - j >= i) HIndex = i;
    }
  }
  return HIndex;
}
