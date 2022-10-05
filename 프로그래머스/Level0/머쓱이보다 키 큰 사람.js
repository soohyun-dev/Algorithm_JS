function solution(array, height) {
  let result = array.filter((v) => v > height);
  return result.length;
}
