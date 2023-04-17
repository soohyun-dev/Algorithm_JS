try {
  setTimeout(function () {
    throw Error('에러 발생');
  }, 3000);
} catch (err) {
  console.log('에러 핸들링: ' + err.message);
}
console.log('코드 종료.');
