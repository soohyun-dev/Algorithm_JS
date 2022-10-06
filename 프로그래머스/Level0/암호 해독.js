function solution(cipher, code) {
  let cnt = 1;
  let result = "";
  while (code * cnt <= cipher.length) {
    result += cipher[code * cnt - 1];
    cnt += 1;
  }
  return result;
}
