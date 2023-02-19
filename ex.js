// map의 가로 세로 크기
let [N, M] = [3, 3];

// x값을 채울 수 있는 후보들
let abc = ['a', 'b', 'c'];

let map = [
  ['x', 'x', 'a'],
  ['a', 'c', 'b'],
  ['c', 'b', 'x']
];

// map에서 현재 x 가 있는 좌표들을 확인하는 함수
const getlocation = () => {
  let loaction = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 'x') loaction.push([i, j]);
    }
  }

  return loaction;
};

// 정답배열
let result = [];

// 백트래킹 재귀 함
const dfs = () => {
  // 지도에서 남은 x좌표 확인
  let next = getlocation();

  // x좌표가 없으면 지도가 다 채워졌으므로 리턴
  if (!next.length) {
    result.push(map);
    console.log(result);
    return;
  }

  // x좌표들을 바탕으로 백트래킹 진행
  for (let i of next) {
    let [nx, ny] = i;

    // a , b , c 값들에 대해서 for문 진행
    for (let j = 0; j < 3; j++) {
      map[nx][ny] = abc[j];
      dfs();
    }
    map[nx][ny] = 'x'; // 백트래킹을 위해 원상복구
    return; // 각 재귀레벨에서 next배열의 첫번째
    // 값에 대해서만 탐색 및 백트래킹을 진행하고 return
  }
};

dfs();

console.log(result);
