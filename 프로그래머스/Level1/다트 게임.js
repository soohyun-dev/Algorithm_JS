function solution(dartResult) {
  let tmp = String(dartResult);
  var answer = 0;
  let result = [];
  let NUM = "";
  for (let j = 0; j < tmp.length; j++) {
    if (isNaN(tmp[j]) === false) NUM += tmp[j];
    else {
      let k = result.length - 1;
      if (tmp[j] === "S") result.push(Number(NUM));
      else if (tmp[j] === "D") result.push(Number(NUM) ** 2);
      else if (tmp[j] === "T") result.push(Number(NUM) ** 3);
      else if (tmp[j] === "*") {
        if (k > 0) {
          result[k] *= 2;
          result[k - 1] *= 2;
        } else result[k] *= 2;
      } else if (tmp[j] === "#") result[k] *= -1;

      NUM = "";
    }
  }
  answer = result.reduce((a, b) => a + b);

  return answer;
}
