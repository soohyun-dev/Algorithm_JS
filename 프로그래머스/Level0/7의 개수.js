function solution(array) {
  return Array.from(array.join("")).filter((v) => v === "7").length;
}
