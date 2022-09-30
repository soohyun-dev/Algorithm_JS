function solution(numbers, target) {
  let cnt = 0;
  const check = (idx, T, nums) => {
    if (idx === nums.length) {
      if (T === target) cnt += 1;
      return;
    }
    check(idx + 1, T + nums[idx], nums);
    check(idx + 1, T - nums[idx], nums);
  };

  check(0, 0, numbers);
  return cnt;
}
