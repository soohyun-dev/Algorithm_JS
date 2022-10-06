function solution(num_list, n) {
  let [result, cnt, tmp] = [[], 0, []];
  num_list.map((v) => {
    tmp.push(v);
    cnt += 1;
    if (cnt === n) {
      result.push(tmp);
      cnt = 0;
      tmp = [];
    }
  });
  return result;
}
