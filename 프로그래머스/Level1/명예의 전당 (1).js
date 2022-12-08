function solution(k, score) {
  const result = [];
  let MIN = Infinity;
  let store = [];
  score.forEach((v) => {
    store.push(v);
    store.sort((a, b) => b - a);
    if (MIN > v) MIN = v;
    if (store.length < k) result.push(MIN);
    else result.push(store[k - 1]);
  });

  return result;
}
