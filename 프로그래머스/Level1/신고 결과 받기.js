function solution(id_list, report, k) {
  var answer = [];
  let dict = {};
  let cnt = {};
  id_list.map((v) => {
    [dict[v], cnt[v]] = [0, 0];
  });
  report = new Set(report);
  report = [...report];
  report.map((v) => {
    let [A, B] = v.split(" ");
    dict[B] += 1;
  });
  report.map((v) => {
    let [A, B] = v.split(" ");
    if (dict[B] >= k) cnt[A] += 1;
  });

  id_list.map((v) => {
    answer.push(cnt[v]);
  });

  return answer;
}
