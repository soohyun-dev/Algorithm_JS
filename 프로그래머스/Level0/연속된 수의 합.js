function solution(num, total) {
  const v = ~~(total / num);
  const half = ~~((num - 1) / 2);
  let result = [];

  for (let i = v - half; i <= v + half + 1; i++) result.push(i);

  if (total % num === 0) result.pop();

  return result;
}
