const N = 40;
let cnt = 0;

for (let i = 1; i <= N; i++) {
  cnt++;
  if (i % 3 === 0 || (i % 10) % 3 === 0 || (i % 100) % 3 === 0) {
    cnt++;
    if (cnt % 3 === 0 || (cnt % 10) % 3 === 0 || (cnt % 100) % 3 === 0) {
      cnt++;
    }
  }
  console.log(cnt);
}
