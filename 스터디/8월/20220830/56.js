const nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

const checkCountry = (center) => {
  // 양쪽 차이 계산 해주고 결과값 돌려주는 함수
  let left = newList[center - 1][1];
  let right = newList[center + 1][1];
  let left_cnt = newList[center][1] - left;
  let right_cnt = newList[center][1] - right;

  if (left_cnt > right_cnt) {
    // 오른쪽 나라가 차이 더 적을 때
    return [newList[center + 1], right_cnt];
  } else {
    // 왼쪽 나라가 차이 더 적을 때
    return [newList[center - 1], left_cnt];
  }
};

// 새로운 배열에 담아서 정렬
newList = [];
for (let name in nationWidth) {
  newList.push([name, nationWidth[name]]);
}

newList.sort(function (a, b) {
  return a[1] - b[1];
});

// 한국 키 값 찾기
let koreaKey = 0;
for (let i = 0; i < newList.length; i++) {
  if ("korea" in newList[i]) {
    koreaKey = i;
    break;
  }
}
let keys = Object.keys(nationWidth);

if (koreaKey == 0) {
  // 한국이 제일 작은 값일때
  console.log(newList[1][0], newList[1][1] - newList[0][1]);
} else if (koreaKey == newList.length - 1) {
  // 한국이 가장 큰 값일 때
  console.log(newList[-2][0], newList[-1][1] - newList[-2][1]);
} else {
  result = checkCountry(koreaKey);
  console.log(result[0], result[1]);
}
