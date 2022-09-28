function solution(priorities, location) {
  let arr = [...new Array(priorities.length)].map((v, i) => [priorities[i], i]);
  let result = [];
  priorities = priorities.sort((a, b) => b - a);
  let idx = 0;
  while (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[0][0] !== priorities[0]) {
        let tmp = arr[0];
        arr = [...arr.splice(1), tmp];
      } else {
        priorities = priorities.splice(1);
        result = [...result, arr[0]];
        arr = arr.splice(1);
        break;
      }
    }
  }
  for (let j = 0; j < result.length; j++)
    if (result[j][1] === location) return j + 1;
}
