function solution(n, left, right) {
  let answer = [];
  let [a, b, c, d] = [
    parseInt(left / n),
    left % n,
    parseInt(right / n),
    right % n,
  ];
  let check = false;
  for (let i = a; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (i - 1 === a && j - 1 === b) check = true;
      if (check === true) answer.push(Math.max(i, j));
      if (i - 1 === c && j - 1 === d) return answer;
    }
  }
}
