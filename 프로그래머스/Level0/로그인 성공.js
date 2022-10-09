function solution(id_pw, db) {
  let dict = {};
  for (let [id, pw] of db) dict[id] = pw;
  return !dict[id_pw[0]]
    ? "fail"
    : dict[id_pw[0]] === id_pw[1]
    ? "login"
    : "wrong pw";
}
