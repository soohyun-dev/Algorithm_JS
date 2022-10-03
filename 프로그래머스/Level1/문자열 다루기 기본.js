function solution(s) {
  var answer = true;
  let arr = s.split("");
  if (arr.length === 4 || arr.length === 6) {
    arr.map((v) => {
      if (isNaN(v) === true) answer = false;
    });
  } else answer = false;
  return answer;
}
