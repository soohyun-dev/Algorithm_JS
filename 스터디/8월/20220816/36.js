const N = 2;

result = [];

for (let i = 1; i <= 9; i++) {
  result.push(N * i);
}

console.log(result);

const multiplicationTable = (num) => {
  const NINE = 9;
  let table = " ";

  for (let i = 1; i <= NINE; i++) {
    table += `${num * i} `;
  }

  return table;
};

console.log(multiplicationTable("2"));
