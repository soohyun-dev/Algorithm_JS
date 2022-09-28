function solution(s) {
  var answer = -1;
  let arr = [];
  for (let i of s) {
    arr.push(i);
    if (arr.length > 1)
      if (arr[arr.length - 1] === arr[arr.length - 2])
        arr.splice(arr.length - 2, 2);
  }
  answer = arr.length === 0 ? 1 : 0;

  return answer;
}
