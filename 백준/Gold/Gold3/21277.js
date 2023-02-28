const input = require('fs').readFileSync('././index.txt').toString().trim().split('\n');

const [inputN, inputM] = input[0].split(' ').map(Number);
const inputMap = [];
const inputMap2 = [];
for (let i = 1; i < 1 + inputN; i++) {
  inputMap.push(input[i].trim().split('').map(Number));
}
const [inputN2, inputM2] = input[inputN + 1].split(' ').map(Number);
for (let j = inputN + 2; j < inputN + inputN2 + 2; j++) {
  inputMap2.push(input[j].trim().split('').map(Number));
}
const log = console.log;

function solution(N1, M1, Map1, N2, M2, Map2) {
  const result = [];
  const calculate = (n1, m1, n2, m2, originMap, newMap) => {
    let [mx, my] = [0, 0];
    while (true) {
      let check = true;
      for (let i = 0; i < n2; i++) {
        for (let j = 0; j < m2; j++) {
          if (i + mx >= n1 || j + my >= m1) continue;
          if (originMap[i + mx][j + my] === 1 && newMap[i][j] === 1) {
            check = false;
            break;
          }
        }
      }
      if (check) {
        const x = mx + n2;
        const y = my + m2;
        result.push(Math.max(n1, x) * Math.max(m1, y));
        mx += 1;
      }
      if (!check) {
        my += 1;
      }
      if (my === m1) {
        my = 0;
        mx += 1;
      }
      if (mx === n1) {
        break;
      }
    }
  };

  for (let i = 0; i <= 1; i++) {
    let nTmp = N2;
    N2 = N1;
    N1 = nTmp;
    let mTmp = M2;
    M2 = M1;
    M1 = mTmp;
    let MTmp = Map2;
    Map2 = [...Map1];
    Map1 = [...MTmp];

    const rotate1 = Array.from(Array(M2), () => Array(N2).fill(0));
    for (let i = M2 - 1; i >= 0; i--) {
      for (let j = 0; j < N2; j++) {
        rotate1[M2 - i - 1][j] = Map2[j][i];
      }
    }

    const rotate2 = Array.from(Array(N2), () => Array(M2).fill(0));
    for (let i = N2 - 1; i >= 0; i--) {
      rotate2[i] = [...Map2[N2 - i - 1]].reverse();
    }

    const rotate3 = Array.from(Array(M2), () => Array(N2).fill(0));
    for (let i = M2 - 1; i >= 0; i--) {
      for (let j = N2 - 1; j >= 0; j--) {
        rotate3[i][N2 - j - 1] = Map2[j][i];
      }
    }

    calculate(N1, M1, N2, M2, Map1, Map2);
    calculate(N1, M1, M2, N2, Map1, rotate1);
    calculate(N1, M1, N2, M2, Map1, rotate2);
    calculate(N1, M1, M2, N2, Map1, rotate3);
    const rotateMap1 = Array.from(Array(M1), () => Array(N1).fill(0));
    for (let i = M1 - 1; i >= 0; i--) {
      for (let j = 0; j < N1; j++) {
        rotateMap1[M1 - i - 1][j] = Map1[j][i];
      }
    }
    calculate(M1, N1, N2, M2, rotateMap1, Map2);
    calculate(M1, N1, M2, N2, rotateMap1, rotate1);
    calculate(M1, N1, N2, M2, rotateMap1, rotate2);
    calculate(M1, N1, M2, N2, rotateMap1, rotate3);
    const rotateMap2 = Array.from(Array(N1), () => Array(M1).fill(0));
    for (let i = N1 - 1; i >= 0; i--) {
      rotateMap2[i] = [...Map1[N1 - i - 1]].reverse();
    }

    calculate(N1, M1, N2, M2, rotateMap2, Map2);
    calculate(N1, M1, M2, N2, rotateMap2, rotate1);
    calculate(N1, M1, N2, M2, rotateMap2, rotate2);
    calculate(N1, M1, M2, N2, rotateMap2, rotate3);

    const rotateMap3 = Array.from(Array(M1), () => Array(N1).fill(0));
    for (let i = M1 - 1; i >= 0; i--) {
      for (let j = N1 - 1; j >= 0; j--) {
        rotateMap3[i][N1 - j - 1] = Map1[j][i];
      }
    }
    calculate(M1, N1, N2, M2, rotateMap3, Map2);
    calculate(M1, N1, M2, N2, rotateMap3, rotate1);
    calculate(M1, N1, N2, M2, rotateMap3, rotate2);
    calculate(M1, N1, M2, N2, rotateMap3, rotate3);
  }

  return Math.min((N1 + N2) * Math.max(M1, M2), (M1 + M2) * Math.max(N1, N2), ...result);
}

log(solution(inputN, inputM, inputMap, inputN2, inputM2, inputMap2));
/*
1111
1001
1001
1111

11
11

111100
111110
111110
111110
001010

*/
