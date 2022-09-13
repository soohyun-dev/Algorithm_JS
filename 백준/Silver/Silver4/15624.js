const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const T = Number(input);

fib = [0, 1, 1];
for (let i = 3; i <= T; i++) fib.push((fib[i - 2] + fib[i - 1]) % 1000000007);

console.log(fib[T]);
