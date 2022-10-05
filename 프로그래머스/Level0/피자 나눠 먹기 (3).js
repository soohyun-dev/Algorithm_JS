function solution(slice, n) {
  return n % slice === 0 ? ~~(n / slice) : ~~(n / slice) + 1;
}
