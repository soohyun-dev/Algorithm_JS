function solution(number) {
  let check = Array.from({ length: number.length }, () => false);
  let result = 0;
  const DFS = (idx, cnt) => {
    if (cnt === 3) {
      let SUM = 0;
      check.map((v, i) => {
        if (v === true) SUM += number[i];
        console.log(v, i);
      });
      result += SUM === 0 ? 1 : 0;
    }
    for (let i = idx; i < number.length; i++) {
      if (check[i] === true) continue;
      check[i] = true;
      DFS(i, cnt + 1);
      check[i] = false;
    }
  };
  DFS(0, 0);

  return result;
}

console.log(solution([-2, 3, 0, 2, -5]));
