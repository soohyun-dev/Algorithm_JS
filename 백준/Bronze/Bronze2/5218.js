const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = input.shift();

const alpha = input.map((value) => {
  let [left, right] = value.split(" ");
  const distances = [];
  for (let i = 0; i < left.length; i++) {
    let start = left.charCodeAt([i]);
    let end = right.charCodeAt([i]);

    if (start > end) {
      distances.push(end + 26 - start);
    } else {
      distances.push(end - start);
    }
  }
  process.stdout.write("Distances: ");
  console.log(distances.join(" "));
});
