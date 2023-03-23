const input = require('fs').readFileSync('././index.txt').toString().trim().split('\n');

const inputTests = input.map((v) => v.trim());
const log = console.log;

/*
확인할 것 들

가로 3방향
세로 3방향 
대각선 2방향 이어지는지 확인

3칸이 이어지면 '즉시' 종료되어야함.

즉, 이어지는게 두개이상이면 안됨.

또한 O가 이어져서 이겼을 경우 X의 갯수가 O의 갯수와 무조건 같아야함.
O가 3개 이어지는순간 끝나므로 X가 더 둘수 없기때문.

같은 논리로 X 3개가 이어져서 이긴다면, O의 갯수는 X의 갯수보다 한 개 작아야됨.

이어지는게 없더라도 X의 갯수가 한개 많은체로 가득 찼다면 이 경우도 끝난 것으로 인정.

어떠한 경우에도 X와 O의 갯수는 1개이상 차이날 수 없고, O의 갯수는 X보다 많아질 수 없다.

10퍼에서 틀림
*/

function solution(tests) {
  let idx = 0;

  while (tests[idx] !== 'end') {
    const tmp = tests[idx].split('');
    const board = [];
    for (let i = 0; i < 3; i++) {
      board.push(tmp.splice(0, 3));
    }
    // 이어지는지 확인

    let isValid = false;
    let check = 0;
    let xCorrect = false;
    let oCorrect = false;
    let crossCheck = false;
    let xCnt = 0;
    let oCnt = 0;
    let noEmpty = true;
    for (let j = 0; j < 3; j++) {
      if (board[j][0] === board[j][1] && board[j][1] === board[j][2] && board[j][0] !== '.') {
        check += 1;
        if (board[j][0] === 'X') xCorrect = true;
        else oCorrect = true;
      }
      if (board[0][j] === board[1][j] && board[1][j] === board[2][j] && board[0][j] !== '.') {
        check += 1;
        if (board[0][j] === 'X') xCorrect = true;
        else oCorrect = true;
      }
      for (let k = 0; k < 3; k++) {
        const target = board[j][k];
        if (target === 'X') xCnt += 1;
        if (target === 'O') oCnt += 1;
        if (target === '.') noEmpty = false;
      }
    }

    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '.') {
      check += 1;
      crossCheck = true;
      if (board[0][0] === 'X') xCorrect = true;
      else oCorrect = true;
    }

    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '.') {
      check += 1;
      crossCheck = true;
      if (board[0][2] === 'X') xCorrect = true;
      else oCorrect = true;
    }

    // 다 채운경우
    if (xCnt - oCnt === 1 && noEmpty) isValid = true;
    if (xCorrect && xCnt - oCnt === 1) isValid = true;
    if (oCorrect && xCnt === oCnt) isValid = true;
    if (crossCheck) isValid = true;

    // 두개다 맞는 경우는 없음
    if (xCorrect && oCorrect) isValid = false;
    // x가 맞았을 경우 o의 갯수가 같거나 적을 수 없음
    if (xCorrect && !oCorrect) {
      if (xCnt <= oCnt) isValid = false;
    }
    // 갯수는 1개이상 차이나면 안되고 o의 갯수가 많은 경우는 없음
    if (Math.abs(xCnt - oCnt) > 1 || oCnt > xCnt) isValid = false;

    log(isValid ? 'valid' : 'invalid');

    idx += 1;
  }
}

solution(inputTests);

/*
반례

XXX
OOX
...

invalid

XXX
OOO
...

invalid

XXX
OO.
... 

valid

XOO
OX.
X.X

valid

XOX
XOX
OXO

valid

OXO
OXO
XOX

invalid

OX.
...
...

invalid

XXX
XOO
XOO

valid

XXO
XXO
XOO

inValid

X..
OX.
O.X

valid

XXX
O..
...

invalid

XX.
OOO
XX.

invalid

...
XOO
..X

invalid

OOO
XOX
OXO

...
...
...

invalid


XXX
OO.
.OX

valid


OOO
OXX
XX.

valid

XXOO.....

invalid

X........

invalid

XOXX.O...

invalid
*/
