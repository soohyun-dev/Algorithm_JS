const S = "aaabbbbcdddd";

const Zip = (s) => {
  const list = [];
  let check = false;
  let cnt = 0;
  let X = s[0];
  for (let i = 0; i < s.length; i++) {
    if (X === s[i]) {
      cnt += 1;
      if (i === s.length - 1) {
        list.push(s[i]);
        list.push(cnt);
      }
    } else {
      list.push(X);
      list.push(cnt);
      cnt = 1;
      X = s[i];
    }
  }
  return list;
};

result = Zip(S);
console.log(result.join(""));
