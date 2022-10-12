function solution(denum1, num1, denum2, num2) {
  let [up, down] = [denum1 * num2 + denum2 * num1, num1 * num2];
  let check = true;
  while (true) {
    let check = true;
    for (let i = 2; i <= Math.min(up, down); i++) {
      if (up % i === 0 && down % i === 0) {
        [up, down] = [parseInt(up / i), parseInt(down / i)];
        check = false;
      }
    }
    if (check === true) break;
  }
  return [up, down];
}
