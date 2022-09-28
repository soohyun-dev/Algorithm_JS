function solution(board, moves) {
  var answer = 0;
  let height = board.length;
  let store = [];
  let cnt = 0;
  for (let i of moves) {
    for (let j = 0; j < height; j++) {
      if (board[j][i - 1] !== 0) {
        store.push(board[j][i - 1]);
        let k = store.length;
        if (store[k - 2] === board[j][i - 1]) {
          cnt += 2;
          store.pop();
          store.pop();
        }
        board[j][i - 1] = 0;
        break;
      }
    }
  }

  return cnt;
}
