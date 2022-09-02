const text = "안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.";

let cnt = 1;

for (let i = 0; i < text.length; i++) {
  if (text[i] == " ") {
    cnt += 1;
  }
}

console.log(cnt);

const getWordCount = (string) => string.split(" ").length;

console.log(getWordCount(text));
