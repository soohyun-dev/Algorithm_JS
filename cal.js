function solution(arr1, arr2) {
  var answer = [...new Array(arr1.length)].map(() => []);
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      let result = 0;
      for (let k = 0; k < arr2.length; k++) {
        result += arr1[i][k] * arr2[k][j];
      }
      answer[i].push(result);
    }
  }
  return answer;
}
