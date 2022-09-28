function solution(n) {
  let dp = [...new Array(n + 1)].fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;

  return dp[n];
}

function solution(clothes) {
  let idx = 0;
  let arr = [...new Array(clothes.length)].map(() => []);
  let dict = {};
  for (let i of clothes) {
    if (Object.keys(dict).includes(i[1])) arr[dict[i[1]]].push(i[0]);
    else {
      dict[i[1]] = idx;
      arr[idx].push(i[0]);
      idx += 1;
    }
  }
  console.log(arr);
  let answer = 1;
  for (let i of arr) {
    answer *= i.length + 1;
  }
  answer -= 1;

  return answer;
}

function solution(n, left, right) {
  let answer = [];
  let [a, b, c, d] = [
    parseInt(left / n),
    left % n,
    parseInt(right / n),
    right % n,
  ];
  let check = false;
  for (let i = a; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (i - 1 === a && j - 1 === b) check = true;
      if (check === true) answer.push(Math.max(i, j));
      if (i - 1 === c && j - 1 === d) return answer;
    }
  }
}

function solution(progresses, speeds) {
  var answer = [];
  let day = [];
  for (let i = 0; i < progresses.length; i++) {
    let tmp = 100 - progresses[i];
    let v = parseInt(tmp / speeds[i]);
    if (tmp % speeds[i] !== 0) v += 1;
    day.push(v);
  }

  let cnt = 0;
  for (let j = 0; j < day.length; j++) {
    if (cnt <= day[j]) {
      while (cnt <= day[j]) cnt += 1;
      answer.push(1);
    } else answer[answer.length - 1] += 1;
  }
  return answer;
}

let pattern = /[a-z]/;

const check = (arr) => {
  let tmp = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (pattern.test(arr[i]) && pattern.test(arr[i + 1]))
      tmp.push(arr[i] + arr[i + 1]);
  }
  return tmp;
};

function solution(str1, str2) {
  [str1, str2] = [str1.toLowerCase(), str2.toLowerCase()];
  let [arr1, arr2] = [check(str1), check(str2)];
  let arr_v = [...arr1, ...arr2].filter((v, i, arr) => arr.indexOf(v) === i); // 모든 요소 값
  let [dict_1, dict_2] = [{}, {}];
  for (let i of arr_v) [dict_1[i], dict_2[i]] = [0, 0];
  for (let j of arr1) dict_1[j] += 1;
  for (let k of arr2) dict_2[k] += 1;
  let [intsec, union] = [0, 0];
  for (let m of arr_v) {
    // 교집합
    intsec += Math.min(dict_1[m], dict_2[m]);
    // 합집합
    union += Math.max(dict_1[m], dict_2[m]);
  }
  if (intsec === union) return 65536;
  else return parseInt((intsec / union) * 65536);
}

function solution(s) {
  let arr = s.split(/[}]/);
  let A = [];
  for (let i of arr) {
    let B = [];
    let tmp = i.split(/[{,,]/);
    for (let j of tmp) if (!isNaN(j) && j !== "") B.push(Number(j));
    if (B.length !== 0) A.push(B);
  }
  A.sort((a, b) => a.length - b.length);
  let result = [];
  for (let j of A) result.push(...j.filter((v) => !result.includes(v)));

  return result;
}

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
