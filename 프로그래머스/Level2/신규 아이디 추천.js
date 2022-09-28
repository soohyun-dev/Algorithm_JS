const check = (Arr) => {
  // 맨 앞에 마침표 제거
  if (Arr[0] === ".") Arr = Arr.splice(1, Arr.length - 1);

  // 맨 뒤에 마침표 제거
  if (Arr[Arr.length - 1] === ".") Arr = Arr.splice(0, Arr.length - 1);

  return Arr;
};
function solution(new_id) {
  var answer = "";
  let arr = [];
  const regexA = /^[a-z|A-Z]+$/; // 알파벳인지 확인
  const regexN = /^[0-9]+$/; // 숫자인지 확인
  for (let i of new_id) {
    if (regexA.test(i) === true) {
      arr.push(i.toLowerCase()); // 소문자로 집어 넣기
    } else if (regexN.test(i) === true || i === "-" || i === "_") {
      arr.push(i);
    } else if (i === ".") {
      if (arr[arr.length - 1] === ".") continue;
      arr.push(i);
    }
  }
  arr = check(arr);
  if (arr.length === 0) arr.push("a");
  if (arr.length <= 2) {
    while (arr.length !== 3) {
      arr.push(arr[arr.length - 1]);
    }
  }
  if (arr.length > 15) {
    arr = check(arr.splice(0, 15));
  }
  answer = arr.join("");

  return answer;
}
