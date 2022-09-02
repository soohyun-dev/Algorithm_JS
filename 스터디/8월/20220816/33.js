const nums = [1, 2, 3, 4, 5];

console.log(nums.reverse());

const printReverse = (stringArray) => {
  let string = "";

  for (let i = stringArray.length - 1; i >= 0; i--) {
    string += `${stringArray}`;
  }
  return string.trim();
};
