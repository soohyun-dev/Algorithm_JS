function solution(msg) {
  const TypeNum = {};
  for (let i = 65; i <= 90; i++) TypeNum[String.fromCharCode(i)] = i - 64;
  let [cnt, plus, result] = [0, 27, []];
  while (cnt < msg.length) {
    let tmp = msg[cnt];
    let newWord = tmp;
    while (TypeNum[tmp]) {
      newWord = tmp + msg[cnt + 1];
      // 사전에 단어가 있을 때
      if (TypeNum[newWord]) [tmp, cnt] = [newWord, cnt + 1];
      // 사전에 단어가 없을 때
      else {
        TypeNum[newWord] = plus;
        plus += 1;
        cnt += 1;
        result.push(TypeNum[tmp]);
        break;
      }
    }
  }
  return result;
}
