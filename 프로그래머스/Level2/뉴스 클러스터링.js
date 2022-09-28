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
