const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const log = console.log;

function solution(text) {
  const dfs = (target, start) => {
    let value = 1000;
    let pos = start;
    for (let i = start; i < target.length; i++) {
      if (!visited[i] && dict[i] < value) {
        value = dict[i];
        pos = i;
      }
    }
    if (value != 1000) {
      tree[pos + 1] = start;
      visited[pos] = true;
      let result = '';
      visited.forEach((v, idx) => {
        if (v) {
          result += Text[idx];
        }
      });
      answer.push(result);
      dfs(target, pos + 1);
    } else {
      if (start !== 0) {
        dfs(target, tree[start]);
      }
    }
  };

  const Text = text.split('');
  const dict = [];
  const answer = [];
  Text.forEach((v, idx) => {
    dict[idx] = v.charCodeAt([0]);
  });
  const tree = Array.from({ length: Text.length }, () => 0);
  const visited = Array.from({ length: Text.length }, () => false);
  dfs(Text, 0);

  return answer.join('\n');
}

log(solution(input));

/*
  for (let i = 0; i < Text.length; i++) {
    let value = 1000;
    let pos = 0;
    Text.forEach((v, idx) => {
      if (!visited[idx]) {
        if (dict[idx] < value) {
          value = dict[idx];
          pos = idx;
        }
      }
    });
    visited[pos] = true;
    let result = '';
    visited.forEach((v, idx) => {
      if (v) {
        result += Text[idx];
      }
    });
    log(result);
  }

 */
