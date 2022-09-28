const CheckArr = (Arr, Str, Check) => {
  let tmp = dict[Str];
  if (Arr.length > 0 && Arr[Arr.length - 1] === tmp) Arr.pop();
  else Check = false;

  return [Arr, Check];
};

let dict = {};
function solution(s) {
  [dict[")"], dict["]"], dict["}"]] = ["(", "[", "{"];
  let [num, G, cnt] = [s.length, s, 0];
  for (let i = 0; i < num; i++) {
    let check = true;
    let arr = [];
    for (let j = 0; j < num; j++) {
      if (G[j] === "(" || G[j] === "[" || G[j] === "{") arr.push(G[j]);
      else [arr, check] = CheckArr(arr, G[j], check);
      if (check === false) break;
    }

    if (arr.length !== 0) check = false;
    if (check === true) cnt += 1;
    G = G.substr(1, G.length - 1) + G.substr(0, 1);
  }
  return cnt;
}
