function solution(cacheSize, cities) {
  var answer = 0;
  let arr = [];
  for (let i of cities) {
    let tmp = i.toLowerCase();
    if (arr.includes(tmp)) {
      arr = arr.filter((e) => e !== tmp);
      answer += 1;
      arr.push(tmp);
    } else {
      answer += 5;
      arr.push(tmp);
      if (arr.length > cacheSize) {
        arr = [...arr.splice(1, cacheSize)];
      }
    }
  }
  return answer;
}
