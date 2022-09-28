function solution(records) {
  const chatType = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };
  const [answer, arr, dict] = [[], [], {}];
  for (let record of records) {
    let [order, id, name] = record.split(" ");
    if (order !== "Change") arr.push([order, id]);
    if (order !== "Leave") dict[id] = name;
  }
  return arr.map(([type, uid]) => dict[uid] + chatType[type]);
}
