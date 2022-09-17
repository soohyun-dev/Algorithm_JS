const RotateRight = (nums, a) => {
  if (nums.length < a) a = a % nums.length;
  let spliced = nums.splice(nums.length - a, nums.length);
  nums = [...spliced, ...nums];
  return nums;
};

const RotateLeft = (nums, a) => {
  if (nums.length < a) a %= nums.length;
  let spliced = nums.splice(0, a);
  nums = [...nums, ...spliced];
  return nums;
};

arr = [1, 2, 3, 4, 5];

arr = RotateRight(arr, 2); // [ 3, 4, 5, 1, 2 ]
console.log(arr);

arr = RotateLeft(arr, 3); // [ 5, 1, 2, 3, 4 ]
console.log(arr);

arr = RotateRight(arr, 7); // [ 2, 3, 4, 5, 1 ]
console.log(arr);

arr = RotateLeft(arr, 8); // [ 4, 5, 1, 2, 3 ]
console.log(arr);
