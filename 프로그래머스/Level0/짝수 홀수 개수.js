function solution(num_list) {
  let [even, odd] = [0, 0];
  num_list.map((v) => (v % 2 === 0 ? (even += 1) : (odd += 1)));
  return [even, odd];
}
