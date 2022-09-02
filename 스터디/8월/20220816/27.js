name = ["Yunjin", "Hyewon"];
score = [70, 100];

record = {};
for (var i = 0; i <= 1; i++) {
  record[name[i]] = score[i];
}
console.log(record);

const studentInfo = prompt().split(" ");

const getObject = (infoArray) => {
  const name = infoArray[0];
  const score = infoArray[1];
  return new Map.set(name, +score);
};

console.log(getObject(studentInfo));
