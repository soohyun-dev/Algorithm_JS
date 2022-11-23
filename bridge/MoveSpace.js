const OutputView = require("../../View/OutputView");

const { ORDER, ISALLOW } = require("../../utils/constants");
const { ERROR } = require("../../utils/gameMessage");

class MoveSpace {
  #input;

  constructor(input) {
    this.#input = input;
  }

  checkInput() {
    try {
      if (!this.isAllowOrder())
        throw new Error(OutputView.printErrorMessage(ERROR.MOVE_ORDER));
      return ISALLOW.TRUE;
    } catch {
      return ISALLOW.FALSE;
    }
  }

  isAllowOrder() {
    return this.#input === ORDER.UP || this.#input === ORDER.DOWN;
  }
}

module.exports = MoveSpace;
