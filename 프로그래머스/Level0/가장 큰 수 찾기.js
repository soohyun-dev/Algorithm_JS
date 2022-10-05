function solution(array) {
  const MAX = Math.max(...array);
  let cnt = 0;
  array.map((v, idx) => {
    if (v === MAX) cnt = idx;
  });
  return [MAX, cnt];
}
