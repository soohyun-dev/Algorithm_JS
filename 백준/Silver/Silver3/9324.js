const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [input_N, ...input_messages] = input.map((v) => v.trim());

function solution(N, messages) {
  messages.forEach((message) => {
    const dict = {};
    let cnt = 0;
    let isRealMessage = true;
    while (message.length > cnt) {
      if (dict[message[cnt]] === undefined) {
        dict[message[cnt]] = 1;
        continue;
      }
      if (dict[message[cnt]] % 3 === 0) {
        if (message[cnt] !== message[cnt + 1]) {
          isRealMessage = false;
          break;
        }
        cnt += 1;
      }
      dict[message[cnt]] += 1;
      cnt += 1;
    }

    console.log(isRealMessage ? "OK" : "FAKE");
  });
}

solution(Number(input_N), input_messages);
