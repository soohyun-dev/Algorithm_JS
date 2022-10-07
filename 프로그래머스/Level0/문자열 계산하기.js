function solution(my_string) {
  let arr = my_string.split(" ");
  let result = +arr[0];
  let check = true;
  for (let i = 1; i < arr.length; i++) {
    if (isNaN(arr[i])) check = arr[i] === "+" ? true : false;
    else result += check === true ? +arr[i] : -+arr[i];
  }
  return result;
}
