function solution(nums) {
  var answer = 0;
  let tmp = [...new Set(nums)];
  let stand = nums.length / 2;
  let cnt = tmp.length;
  if (cnt >= stand) answer = stand;
  else answer = cnt;
  return answer;
}
