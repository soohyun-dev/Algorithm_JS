const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const exp = input;

function solution(exp) {
  let [idx, arr, brackets, store, answer] = [0, [], [], [], []];
  exp.split("").map((v) => {
    if (v === "(") arr.push(idx);
    else if (v === ")") {
      let s = arr.pop();
      brackets.push([s, idx]);
    }
    idx += 1;
  });

  const order = Array.from({ length: brackets.length }, (v, i) => i + 1);

  const getCombinations = (arr, cnt) => {
    const result = [];
    if (cnt === 1) return arr.map((v) => [v]);

    arr.forEach((fix, idx, origin) => {
      const rest = origin.slice(idx + 1);
      const combinations = getCombinations(rest, cnt - 1);
      const plus = combinations.map((combination) => [fix, ...combination]);
      result.push(...plus);
    });
    return result;
  };

  for (let i = 1; i <= brackets.length; i++)
    store = [...store, ...getCombinations(order, i)];

  store.map((orders) => {
    const bracket = [];
    orders.map((order) => {
      bracket.push(...brackets[order - 1]);
    });
    let tmp = "";
    for (let i = 0; i < exp.length; i++) {
      if (!bracket.includes(i)) tmp += exp[i];
    }
    answer.push(tmp);
  });
  answer = new Set(answer);
  return [...answer].sort();
}

solution(exp).map((v) => console.log(v));
