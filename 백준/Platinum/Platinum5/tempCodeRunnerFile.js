      while (stack.length !== 0) {
        const [target, targetIdx] = stack.pop();
        const rectangle = (N + 1 - targetIdx) * target;
        if (MAX < rectangle) MAX = rectangle;
        if (stack.length === 0) MAX = Math.max(MAX, N * target);
      }