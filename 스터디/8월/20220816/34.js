const { exit } = require("process");

let height = [176, 156, 155, 165, 166, 169];

for (let i = 0; i < height.length - 1; i++) {
  if (height[i] < height[i + 1]) {
    console.log("NO");
    exit(0);
  }
}

console.log("YES");

const isBigger = (num1, num2) => num1 < num2;

const isSorted = (nums) => {
  let sorted = true;
  for (let i = 0; i < nums.length - 1; i++) {
    if (!isBigger(nums[i], nums[i + 1])) {
      sorted = false;
    }
  }
  return sorted ? "YES" : "NO";
};

console.log(isSorted(height));
