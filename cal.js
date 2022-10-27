function problem2(cryptogram) {
  function deleteRepeat(words) {
    let [newWords, check, bool] = [[], false, false];
    words.split("").map((word) => {
      if (newWords[newWords.length - 1] === word) {
        [check, bool] = [true, true];
      } else {
        if (check === true) {
          newWords.pop();
          check = false;
        }
        newWords.push(word);
      }
    });
    if (check === true) newWords.pop();
    return [newWords.join(""), bool];
  }
  let [checkWord, result, repeat] = [cryptogram, "", false];

  while (true) {
    [result, repeat] = deleteRepeat(checkWord);
    if (!repeat) break;
    checkWord = result;
  }
  return result;
}

console.log(problem2("browoanoommnaon"));
