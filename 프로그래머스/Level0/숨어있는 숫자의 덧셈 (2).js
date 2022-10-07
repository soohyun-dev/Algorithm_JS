function solution(my_string) {
  let result = 0;
  let tmp = "";
  for (let i of my_string.split("")) {
    if (!isNaN(i)) tmp += i;
    else {
      result += Number(tmp);
      tmp = "";
    }
  }
  result += Number(tmp);
  return result;
}
