makeMap(bridge, nowStep, isSafe) {
    const map = [[], []];
    const nowSpace = bridge[nowStep][SPACE[direction]];
    for (let step = 0; step < nowStep; step++) {
      map[0].push(PROGRESS[bridge[step][0]]);
      map[1].push(PROGRESS[bridge[step][1]]);
    }

    return this.plusCrurrent(map, nowSpace, direction);
  },

  plusCrurrent(map, nowSpace, direction) {
    if (nowSpace) {
      map[SPACE[direction]].push(PROGRESS.true);
      if (map[0].length > map[1].length) map[1].push(" ");
      else if (map[0].length < map[1].length) map[0].push(" ");
      return [map, true];
    }
    map[SPACE[direction]].push("X");
    if (map[0].length > map[1].length) map[1].push(" ");
    else if (map[0].length < map[1].length) map[0].push(" ");

    return [map, false];
  },