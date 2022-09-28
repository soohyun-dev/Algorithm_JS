function solution(N, stages) {
  var answer = [];
  let level = [...new Array(N + 1)].fill(0); // 실패율 계산 위한 배열
  let arr = [...new Array(N)].map(() => []); // 스테이지랑 실패율 저장
  let cnt = stages.length; // 전체 참여자 수
  stages.sort((a, b) => a - b);
  stages.map((v) => (level[v] += 1));

  // 실패율 계산
  for (let j = 1; j <= N; j++) {
    arr[j - 1].push(level[j] / cnt, j);
    cnt -= level[j];
  }
  // 1. 실패율 순 정렬 2. 순번 순 정렬
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return b[0] - a[0];
  });
  // 정답 추출
  arr.map((v) => answer.push(v[1]));

  return answer;
}
