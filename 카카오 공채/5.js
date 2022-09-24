let dict = {};
let answer = [];
let dr = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
function solution(commands) {
  let map = Array.from(Array(51), () => Array(51).fill(0));
  let MER = Array.from(Array(51), () => Array(51).fill(0));
  for (let i of commands) {
    let order = i.split(" ");
    // 셀 입력
    if (order.length === 4) {
      let [CX, CY] = [parseInt(order[1]), parseInt(order[2])];
      if (MER[CX][CY] === 0)
        map[parseInt(order[1])][parseInt(order[2])] = order[3];
      // 셀 변경
      else {
        let dq = [[CX, CY]];
        let T = MER[CX][CY];
        while (dq.length !== 0) {
          let [x, y] = dq[0];
          dq = dq.splice(1);
          for (let i of dr) {
            let [mx, my] = [x + i[0], y + i[1]];
            if (mx <= 0 || mx > 50 || my <= 0 || my > 50) continue;
            else {
              if (MER[mx][my] === T && map[mx][my] !== order[3]) {
                map[mx][my] = order[3];
                dq.push([mx, my]);
              }
            }
          }
        }
      }
    } else if (order.length === 3) {
      // 문자 교환
      if (order[0] === "UPDATE") {
        for (let i = 1; i < 51; i++) {
          for (let j = 1; j < 51; j++) {
            if (map[i][j] === order[1]) map[i][j] = order[2];
          }
        }
      }
      // 프린트
      else if (order[0] === "PRINT") {
        if (map[parseInt(order[1])][parseInt(order[2])] === 0)
          answer.push("EMPTY");
        else answer.push(map[parseInt(order[1])][parseInt(order[2])]);
      }
      // 병합 해제
      else if (order[0] === "UNMERGE") {
        let [X, Y] = [parseInt(order[1]), parseInt(order[2])];
        let K = MER[X][Y]; //1
        let tmp = map[X][Y];
        let dq = [[X, Y]];
        while (dq.length !== 0) {
          let [x, y] = dq[0];
          dq = dq.splice(1);
          for (let i of dr) {
            let [mx, my] = [x + i[0], y + i[1]];
            if (mx <= 0 || mx > 50 || my <= 0 || my > 50) continue;
            else {
              if (MER[mx][my] === K) {
                MER[mx][my] = 0;
                map[mx][my] = 0;
                dq.push([mx, my]);
              }
            }
          }
        }
        map[X][Y] = tmp;
      }
    }

    // 병합
    else if (order.length === 5) {
      let S = 0;
      let M = 0;
      let [a, b, c, d] = [
        parseInt(order[1]),
        parseInt(order[2]),
        parseInt(order[3]),
        parseInt(order[4]),
      ];
      if (a > c || b > d) [s_x, s_y, e_x, e_y] = [c, d, a, b];
      else [s_x, s_y, e_x, e_y] = [a, b, c, d];
      if (MER[s_x][s_y] === 0) M = 1;
      else M = MER[s_x][s_y];
      // 기준 문자
      if (map[parseInt(order[1])][parseInt(order[2])] === 0)
        S = map[parseInt(order[3])][parseInt(order[4])];
      else S = map[parseInt(order[1])][parseInt(order[2])];
      for (let i = s_x; i <= e_x; i++) {
        for (let j = s_y; j <= e_y; j++) {
          MER[i][j] = M;
          map[i][j] = S;
        }
      }
    }
  }
  return answer;
}
