function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    let start = commands[i][0] - 1;
    let end = commands[i][1] - 1;
    let tmp = array.slice(start, end + 1);
    tmp = tmp.sort((a, b) => a - b);
    answer.push(tmp[commands[i][2] - 1]);
  }
  return answer;
}
