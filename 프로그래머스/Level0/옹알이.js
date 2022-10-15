function solution(babbling) {
  const acc = ["aya", "ye", "woo", "ma"];
  let result = 0;
  babbling.map((v) => {
    let i = 0;
    acc.map((word) => {
      v = v.replaceAll(word, i);
      i += 1;
    });
    if (!isNaN(v)) {
      v = String(v);
      let check = true;
      for (let j = 0; j < v.length - 1; j++) {
        if (v[j] === v[j + 1]) check = false;
      }
      result += check === true ? 1 : 0;
    }
  });
  return result;
}
