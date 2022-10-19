const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [T, ...Pwds] = input;
function solution(T, Pwds) {
  Pwds.map((pwd) => {
    let [answer, tmp] = [[], []];
    pwd.split("").map((v) => {
      if (v === "<") {
        if (answer.length !== 0) tmp.push(answer.pop());
      } else if (v === ">") {
        if (tmp.length !== 0) answer.push(tmp.pop());
      } else if (v === "-") {
        answer.pop();
      } else {
        answer.push(v);
      }
    });
    console.log([...answer, ...tmp.reverse()].join(""));
  });
}

solution(T, Pwds);
