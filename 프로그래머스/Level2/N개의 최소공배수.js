function solution(arr) {
  var answer = 0;
  arr.sort((a, b) => a - b);
  let k = Math.max(...arr);
  let m = arr.length;
  let j = 1;
  while (true) {
    let check = true;
    let tmp = k * j;
    for (let i = 0; i < m - 1; i++) {
      if (tmp % arr[i] !== 0) {
        check = false;
        break;
      }
    }
    if (check === true) break;
    j += 1;
  }
  answer = k * j;
  return answer;
}
