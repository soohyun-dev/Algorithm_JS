a = "pineapple is yummy";
b = "apple";

for (var i = 0; i < a.length; i++) {
  if (a[i] == b[0]) {
    let check = 0;
    for (var j = 0; j < b.length; j++) {
      if (a[i + j] != b[j]) {
        check += 1;
      }
    }
    if (check == 0) {
      console.log(i);
      break;
    }
  }
}

const getIndexOfString = (string, target) => string.indexOf(target);
