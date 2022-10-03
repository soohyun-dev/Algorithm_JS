function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let tmp = "";
    let A = arr1[i].toString(2).padStart(n, 0);
    let B = arr2[i].toString(2).padStart(n, 0);
    for (let j = 0; j < n; j++) {
      if (Number(A[j]) || Number(B[j])) tmp += "#";
      else tmp += " ";
    }
    answer.push(tmp);
  }
  return answer;
}
