const order = ["U", "D", "U", "U", "D", "U"];

const nowMap = [[], []];

const ORDER = {
  D: 0,
  U: 1,
};

order.forEach((v) => {
  const trapZone = Object.keys(ORDER).filter((k) => k !== v)[0];
  console.log(trapZone);
  nowMap[ORDER[v]].push("O");
  nowMap[ORDER[trapZone]].push(" ");
});

console.log(nowMap);
