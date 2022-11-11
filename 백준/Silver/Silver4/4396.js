const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let input_T = input.shift();
input_T = Number(input_T);
let [...input_mine] = input;
let [...input_user] = input_mine.splice(input_T, input_T * 2);

function solution(T, mine, user) {
  const dr_x = [-1, -1, -1, 0, 1, 1, 1, 0];
  const dr_y = [-1, 0, 1, 1, 1, 0, -1, -1];
  let check = "cotinue";

  const nearMineCnt = (x, y) => {
    for (let k = 0; k < 8; k++) {
      const [mx, my] = [x + dr_x[k], y + dr_y[k]];
      if (mx < 0 || mx >= T || my < 0 || my >= T) continue;
      result[mx][my] += 1;
    }
  };

  mine = mine.map((v) => v.trim().split(""));
  user = user.map((v) => v.trim().split(""));
  result = Array.from(Array(T), () => Array(T).fill(0));
  for (let i = 0; i < T; i++) {
    for (let j = 0; j < T; j++) {
      if (mine[i][j] === "*") {
        nearMineCnt(i, j);
        if (user[i][j] === "x") check = "END";
      }
    }
  }

  result.forEach((line, i) => {
    let answer = "";
    line.forEach((v, j) => {
      if ((user[i][j] === "x" && mine[i][j]) === ".") answer += v;
      else if (mine[i][j] === "*" && check === "END") answer += "*";
      else answer += ".";
    });
    console.log(answer);
  });
}

solution(input_T, input_mine, input_user);
