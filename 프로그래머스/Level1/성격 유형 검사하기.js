function solution(survey, choices) {
  var answer = "";
  let dict = {};
  let idx = 0;
  let S = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];
  S.map((v) => {
    [dict[v[0]], dict[v[1]]] = [0, 0];
  });

  survey.map((v) => {
    let [dg, ag] = [v[0], v[1]];
    if (choices[idx] < 4) dict[dg] += 4 - choices[idx];
    else if (choices[idx] > 4) dict[ag] += choices[idx] - 4;
    idx += 1;
  });

  S.map((v) => {
    let [A, B] = [dict[v[0]], dict[v[1]]];
    if (A >= B) answer += v[0];
    else answer += v[1];
  });

  return answer;
}
