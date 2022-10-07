function solution(emergency) {
  let SORT = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => SORT.indexOf(v) + 1);
}
