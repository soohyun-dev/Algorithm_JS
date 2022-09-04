const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const chkWord = (word, check) => {
  let i = 0;
  let cnt = 0;
  while (i < word.length) {
    if (i < word.length) {
      if (word[i] == check[0]) {
        if (word[i + 1] == check[1]) {
          if (word[i + 2] == check[2]) {
            cnt += 1;
          }
        }
      }
    }
    i += 1;
  }
  return cnt;
};

console.log(chkWord(input, "JOI"));
console.log(chkWord(input, "IOI"));
