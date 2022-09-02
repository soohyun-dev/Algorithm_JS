const { exit } = require("process");

const nums = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];

nums.sort();

const List = nums.reverse();

cnt = 0;
result = 0;
for (var i = 0; i < nums.length; i++) {
  if (List[i] == List[i + 1]) {
    cnt += 1;
  } else {
    cnt += 1;
    result += 1;
  }
  if (result == 3) {
    console.log(cnt);
    exit(0);
  }
}

const getNumberOfThirds = (scoreArray) => {
  const THIRD = 2;
  const thirdScore = [...new Set(scoreArray).values].sort((a, b) => b - a)[
    THIRD
  ];
  return scoreArray.filter((score) => score >= thirdScore).length;
};
