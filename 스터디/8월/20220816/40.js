const { exit } = require("process");

const MAX = 50;
const cnt = 5;

const friends = [20, 20, 20, 20, 20];
let sum = 0;

for (let i = 0; i < friends.length; i++) {
  sum += friends[i];
  if (sum > MAX) {
    console.log(i);
    exit(0);
  }
}
print(friends.length);

const getNumberofRide = (friendArray, limitWeight) => {
  let limit = limitWeight;
  let count = 0;

  for (let i = 0; i < friendArray.length; i++) {
    limit -= friendArray[i];
    if (limit >= 0) count++;
    else break;
  }
  return count;
};
