const N = 5;

for (var i = 1; i < 6; i++) {
  var star = "";
  for (var j = 4; j <= n - i; j++) {
    star += " ";
  }
  for (var k = 0; k <= i * 2; k++) {
    star += "*";
  }
  console.log(star);
}
