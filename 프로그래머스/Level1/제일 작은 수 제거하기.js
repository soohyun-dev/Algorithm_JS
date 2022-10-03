function solution(arr) {
  var answer = [];
  if (arr[0] === 10 && arr.length === 1) answer.push(-1);
  else {
    let tmp = Math.min(...arr);
    arr.map((v) => {
      if (v !== tmp) answer.push(v);
    });
  }
  return answer;
}
