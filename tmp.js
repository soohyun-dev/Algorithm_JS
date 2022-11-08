const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE, FORMAT, ERROR, SELECT } = require("./constant/constant");
const { Random, Console } = MissionUtils;
const ALLOW_NUM = /[1-9]/;
const ALLOW_LENGTH = 3;

class App {
  constructor() {
    this.answer = [];
    this.userInput = "";
  }

  restartQuestion() {
    Console.readLine(`${MESSAGE.CONTINUE}\n`, (input) => {
      if (!this.checkException(input, FORMAT.RESTART)) {
        throw new Error(ERROR.CHOOSE);
      }
      if (input === SELECT.CONTINUE) this.startGame();
      else if (input === SELECT.EXIT) {
        Console.print(MESSAGE.END);
        Console.close();
      }
    });
  }

  getCnt() {
    let ballCnt = 0;
    let strikeCnt = 0;
    [...this.userInput].forEach((num, idx) => {
      if (+num !== this.answer[idx] && this.answer.includes(+num)) ballCnt += 1;
      else if (+num === this.answer[idx]) strikeCnt += 1;
    });

    return [ballCnt, strikeCnt];
  }

  createResult() {
    const [ball, strike] = this.getCnt();
    let result = "낫싱";

    if (ball > 0 && strike > 0) result = `${ball}볼 ${strike}스트라이크`;
    else if (ball > 0) result = `${ball}볼`;
    else if (strike > 0) result = `${strike}스트라이크`;

    Console.print(result);
    if (result === MESSAGE.CLEAR) {
      Console.print(MESSAGE.FINISH);
      this.restartQuestion();
    } else this.getUserInput();
  }

  checkInputNum(inputNum, allowed) {
    const duplicationCheck = [...new Set(inputNum)].length;
    if (inputNum.length !== ALLOW_LENGTH) throw new Error(ERROR.LENGTH);
    if (duplicationCheck !== ALLOW_LENGTH) throw new Error(ERROR.DUPLICATION);
    inputNum.forEach((str) => {
      allowed = ALLOW_NUM.test(str) && allowed;
    });

    return allowed;
  }

  checkException(inputNum, checkStyle) {
    if (checkStyle === FORMAT.PLAY) {
      return this.checkInputNum([...inputNum], true);
    } else if (checkStyle === FORMAT.RESTART) {
      return inputNum === SELECT.CONTINUE || inputNum === SELECT.EXIT;
    }
  }

  getUserInput() {
    Console.readLine(MESSAGE.ENTER, (input) => {
      if (!this.checkException(input, FORMAT.PLAY)) {
        throw new Error(ERROR.STRING);
      }
      this.userInput = input;
      this.createResult();
    });
  }

  createAnswer() {
    this.answer = [];
    while (this.answer.length < ALLOW_LENGTH) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer.push(number);
      }
    }
  }

  startGame() {
    this.createAnswer();
    this.getUserInput();
    this.restartQuestion();
  }

  play() {
    Console.print(MESSAGE.START);
    this.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
