const vote = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];

const dict = {};
const name = [];

for (let i = 0; i < vote.length; i++) {
  if (!(vote[i] in dict)) {
    dict[vote[i]] = 1;
    name.push(vote[i]);
  } else {
    dict[vote[i]] += 1;
  }
}

answer = ["", 0];

for (let j = 0; j < name.length; j++) {
  if (dict[name[j]] > answer[1]) {
    answer[0] = name[j];
    answer[1] = dict[name[j]];
  }
}

console.log(answer[0] + "(이)가 총 " + answer[1] + "표로 반장이 되었습니다.");

const getMostVoted = (nameArray) => {
  const map = {};

  nameArray.forEach((name) => {
    map[name] = map[name] + 1 || 1;
  });
  const votedPerson = Object.keys(map).sort((a, b) => map[b] - map[a])[0];
  const mostVotedNum = map[votedPerson];

  return `${votedPerson}(이)가 총 ${mostVotedNum}표로 반장이 되었습니다.`;
};
