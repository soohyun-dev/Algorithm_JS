const { Console } = require("@woowacourse/mission-utils");
const Exception = require("./error/exception");
const PurchaseError = require("./error/purchase");
const WinNumberError = require("./error/winNumber");
const ChangeLotto = require("./ChangeLotto");

const { COMMAND } = require("./utils/constant");

class Lotto {
  #numbers;
  #exception;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#exception = new Exception();
    this.changeLotto = new ChangeLotto();
    this.input = 0;
  }

  print(message) {
    Console.print(message);
  }

  duplicateCheck(allow) {
    const numbersLength = [...new Set(this.#numbers)].length;
    if (numbersLength !== UNIT.LOTTO_LENGTH) {
      return false;
    }

    return allow;
  }

  checkInput() {
    if (duplicateCheck(true)) throw new Error(ERROR.SIX_CNT);
    return true;
  }

  askWinNumber() {
    Console.readLine(`\n${COMMAND.WIN}\n`, (input) => {
      this.#exception.isAllow(new WinNumberError(input));
    });
  }

  start() {
    Console.readLine(`${COMMAND.BUY}\n`, (input) => {
      this.#exception.isAllow(new PurchaseError(input));
      this.input = input;
      this.changeLotto.change(this.input);
      this.askWinNumber();
    });
  }
}

module.exports = Lotto;
