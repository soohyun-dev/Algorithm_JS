pascal.forEach((_, idx) => {
  //     if (idx > 1) {
  //       pascal[idx - 1].forEach((num, len) => {
  //         pascal[idx].push(len < pascal[idx - 1].length - 1 ? num + pascal[idx - 1][len + 1] : 1);
  //       });
  //     }
  //     if (idx >= R - 1 && idx < R + W - 1) {
  //       result += pascal[idx].slice(C - 1, C + cnt - 1).reduce((a, b) => a + b);
  //     }
  //     cnt += idx >= R - 1 && idx < R + W - 1 ? 1 : 0;
  //   });

  //   return result;