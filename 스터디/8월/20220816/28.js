text = "Javascript";

for (var i = 0; i < text.length - 1; i++) {
  console.log(text[i], text[i + 1]);
}

const splitTwo = (string) => {
  for (let i = 0; i < string.length - 1; i++) {
    console.log(string[i], string[i + 1]);
  }
};

splitTwo("Javascript");
