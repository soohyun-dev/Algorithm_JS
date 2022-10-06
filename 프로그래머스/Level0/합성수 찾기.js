function solution(n) {
  const yaksu = (num) => {
    let cnt = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) cnt += 1;
      if (cnt >= 3) return true;
    }
    return false;
  };

  let result = 0;
  for (let i = 4; i <= n; i++) result += yaksu(i) === true ? 1 : 0;

  return result;
}
