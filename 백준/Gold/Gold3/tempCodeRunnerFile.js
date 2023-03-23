
      return;
    }
    if (idx + 2 < N) {
      dfs(idx + 2, calculate(total, +test[idx + 2], test[idx + 1]));
    }
    if (idx + 4 < N) {
      const tmp = calculate(+test[idx + 2], +test[idx + 4], test[idx + 3]);
      dfs(idx + 4, calculate(total, tmp, test[idx + 1]));
    }
  };

  let MAX = -1;
  dfs(0, 0);

  log(MAX);
}
