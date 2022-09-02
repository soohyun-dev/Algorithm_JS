const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903",
};

arr = [];
for (name in people) {
  if (name in arr) {
    if (people[name] in arr) {
      continue;
    } else {
      arr.push([name, people[name]]);
    }
  } else {
    arr.push([name, people[name]]);
  }
}

console.log(arr.length);
