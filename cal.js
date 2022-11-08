getCnt() {
    const result = [];
    let ballCnt = 0;
    let strikeCnt = 0;
    [...this.userInput].forEach((num, idx) => {
      if (+num !== this.answer[idx] && this.answer.includes(+num)) ballCnt += 1;
      else if (+num === this.answer[idx]) strikeCnt += 1;
    });
    if (ballCnt > 0) result.push(`${ballCnt}볼`);
    if (strikeCnt > 0) result.push(`${strikeCnt}스트라이크`);

    return result;
  }

  createResult() {
    const getCntResult = this.getCnt();
    let result = "낫싱";

    if (getCntResult.length === 1) result = getCntResult.join("");
    else if (getCntResult.length === 2)
      result = getCntResult.map((str) => str).join(" ");

    Console.print(result);
    if (result === MESSAGE.CLEAR) {
      Console.print(MESSAGE.FINISH);
      this.restartQuestion();
    } else this.getUserInput();
  }


  createResult() {
    const [ball, strike] = this.getCnt();
    let result = "";

    if (ball === 0 && strike === 0) result = "낫싱";
    if (ball > 0) result += `${ball}볼`;
    if (ball > 0 && strike > 0) result += " ";
    if (strike > 0) result += `${strike}스트라이크`;


    getCnt() {
        const result = [];
        let ballCnt = 0;
        let strikeCnt = 0;
        [...this.userInput].forEach((num, idx) => {
          if (+num !== this.answer[idx] && this.answer.includes(+num)) ballCnt += 1;
          else if (+num === this.answer[idx]) strikeCnt += 1;
        });
        if (ballCnt > 0) result.push(`${ballCnt}볼`);
        if (strikeCnt > 0) result.push(`${strikeCnt}스트라이크`);
    
        return result;
      }
    
      createResult() {
        const getCntResult = this.getCnt();
        let result = "낫싱";
    
        if (getCntResult.length === 1) result = getCntResult.join("");
        else if (getCntResult.length === 2)
          result = getCntResult.map((str) => str).join(" ");
    
        Console.print(result);
        if (result === MESSAGE.CLEAR) {
          Console.print(MESSAGE.FINISH);
          this.restartQuestion();
        } else this.getUserInput();
      }
    
    
      createResult() {
        const [ball, strike] = this.getCnt();
        let result = "";
    
        if (ball === 0 && strike === 0) result = "낫싱";
        if (ball > 0) result += `${ball}볼`;
        if (ball > 0 && strike > 0) result += " ";
        if (strike > 0) result += `${strike}스트라이크`;