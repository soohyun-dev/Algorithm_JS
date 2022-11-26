const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(expression) {
  const isConst = (expression) => {
    let lastXIndex = 0;
    let noConstant = false;
    expression.split("").forEach((v, i) => {
      if (v === "x") [lastXIndex, noConstant] = [i, true];
    });
    return [lastXIndex, noConstant];
  };

  const makeValue = (XIndex, noConstant) => {
    if (noConstant) {
      return [expression.slice(0, XIndex + 1), expression.slice(XIndex + 1)];
    }
    return [[...expression].join("")];
  };

  const checkExpression = (e, sign) => {
    if (e[0] === "+" || e[0] === "-") [sign, e] = [e[0], e.slice(1)];
    if (e !== "" && Number(e) !== 0) {
      if (Number(e) === CONST) result.push(e + "x");
      else result.push(sign + integral(e.split("")));
    }
  };

  const integral = (value) => {
    const coefficient = +value.filter((v) => v !== "x").join("");
    const degree = value.filter((v) => v === "x").length;
    const integralX = Array.from({ length: degree + 1 }).fill("x");
    let integralCoefficient = coefficient / (degree + 1);
    if (integralCoefficient === 1) integralCoefficient = "";
    return `${integralCoefficient}${integralX.join("")}`;
  };

  const [XIndex, noConstant] = isConst(expression);
  const result = [];
  const CONST = "NAN";
  const Value = makeValue(XIndex, noConstant);

  Value.forEach((v) => {
    checkExpression(v, "");
  });

  result.push(result.length !== 0 ? "+W" : "W");

  return result.join("");
}

console.log(solution(input));
