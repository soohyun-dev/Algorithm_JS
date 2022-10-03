function solution(n, lost, reserve) {
  let answer = n;
  const arr = Array.from({ length: n + 1 }, () => 1).fill(0, 0, 0);
  reserve.map((v) => (arr[v] = 2));
  lost.map((v) => (arr[v] -= 1));
  arr.map((v, idx) => {
    if (arr[idx] === 0) {
      if (arr[idx - 1] === 2) {
        arr[idx - 1] -= 1;
        arr[idx] += 1;
      } else if (arr[idx + 1] === 2) {
        arr[idx + 1] -= 1;
        arr[idx] += 1;
      }
    }
  });
  for (let m = 1; m < n + 1; m++) if (arr[m] === 0) answer -= 1;

  return answer;
}
