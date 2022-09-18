const cal = (x, y, a, b) => {
  let tmp = Math.abs(x - a) + Math.abs(y - b);
  return tmp;
};

function solution(numbers, hand) {
  var answer = "";
  const arr = [
    [1, 3],
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [0, 2],
    [1, 2],
    [2, 2],
  ];
  let [left_x, left_y] = [0, 3];
  let [right_x, right_y] = [2, 3];
  let [s_x, s_y] = [0, 0];
  let check = true;
  for (let i of numbers) {
    if (i === 1 || i === 4 || i === 7) {
      // 왼손으로 무조건 누를 때
      answer += "L";
      [left_x, left_y] = arr[i];
    } else if (i === 3 || i === 6 || i === 9) {
      // 오른손으로 무조건 누를 때
      answer += "R";
      [right_x, right_y] = arr[i];
    } else {
      // 왼손, 오른손 구분해줘야 할 때
      [s_x, s_y] = arr[i];
      if (cal(left_x, left_y, s_x, s_y) > cal(right_x, right_y, s_x, s_y))
        check = true;
      else if (cal(left_x, left_y, s_x, s_y) < cal(right_x, right_y, s_x, s_y))
        check = false;
      else {
        if (hand === "right") check = true;
        else check = false;
      }
      if (check === true) {
        answer += "R";
        [right_x, right_y] = [s_x, s_y];
      } else {
        answer += "L";
        [left_x, left_y] = [s_x, s_y];
      }
    }
  }
  return answer;
}
