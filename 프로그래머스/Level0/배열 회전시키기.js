function solution(numbers, direction) {
  return direction === "right"
    ? [numbers[numbers.length - 1], ...numbers.splice(0, numbers.length - 1)]
    : [...numbers.splice(1), numbers[0]];
}
