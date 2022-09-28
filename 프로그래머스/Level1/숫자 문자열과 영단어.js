const alpha = [
  [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ],
  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
];

function solution(s) {
  var answer = 0;
  for (let i = 0; i < 10; i++) {
    tmp = alpha[0][i];
    let regex = new RegExp(tmp, "g");
    s = s.replace(regex, alpha[1][i]);
  }
  answer = Number(s);

  return answer;
}
