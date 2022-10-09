function solution(quiz) {
  const result = [];
  quiz.map((v) => {
    const tmp = v.split(" ");
    if (tmp[1] === "-") result.push(+tmp[0] - +tmp[2] === +tmp[4] ? "O" : "X");
    else result.push(+tmp[0] + +tmp[2] === +tmp[4] ? "O" : "X");
  });
  return result;
}
