const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const T = input.shift();
const END = "what does the fox say?";
let cnt = 0;
while (cnt < Number(T)) {
  const foxSound = [];
  let sounds = input[0].trim().split(" ").map(String);
  let dict = {};
  input.shift();
  while (true) {
    let animal = input[0].trim();
    input.shift();
    if (animal === END) break;
    dict[animal.split(" ").map(String)[2]] = true;
  }
  sounds.map((sound) => {
    foxSound.push(sound);
    if (dict[sound]) foxSound.pop();
  });

  console.log(foxSound.join(" "));
  cnt += 1;
}
