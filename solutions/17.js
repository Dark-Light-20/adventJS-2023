function optimizeIntervals(intervals) {
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  const optimizedIntervals = [sortedIntervals[0]];

  for (let i = 1; i < sortedIntervals.length; i++) {
    const currentInterval = sortedIntervals[i];
    const lastOptimizedInterval =
      optimizedIntervals[optimizedIntervals.length - 1];

    if (currentInterval[0] <= lastOptimizedInterval[1]) {
      lastOptimizedInterval[1] = Math.max(
        currentInterval[1],
        lastOptimizedInterval[1]
      );
    } else {
      optimizedIntervals.push(currentInterval);
    }
  }

  return optimizedIntervals;
}

const answer1 = optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4],
]); // [[2, 8]]
console.log(answer1);

const answer2 = optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6],
]); // [[1, 6], [8, 10]]
console.log(answer2);

const answer3 = optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6],
]); // [[1, 2], [3, 4], [5, 6]]
console.log(answer3);

/* 
    Puntos conseguidos: 140
    1,731 ops/s (Higher is better)
    Cognitive complexity: 4 (Lower is better)
*/
