// Test 8 번 통과 X
//
function solution(keyinput, board) {
  let dict = {};
  const dr = ["left", "right", "down", "up"];
  dr.map((v) => (dict[v] = 0));
  keyinput.map((v) => {
    dict[v] += 1;
  });
  let [a, b, c, d] = [dict["left"], dict["right"], dict["up"], dict["down"]];
  let [X, Y] = [b - a, c - d];
  let result = [0, 0];
  const [s_x, s_y] = [~~(board[0] / 2), ~~(board[1] / 2)];
  result[0] = X < -s_x ? -s_x : X > s_x ? s_x : X;
  result[1] = Y < -s_y ? -s_y : Y > s_y ? s_y : Y;
  return result;
}
