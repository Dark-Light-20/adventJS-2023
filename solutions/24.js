function getStaircasePaths(steps, maxJump) {
  if (steps === 0) return [[]];
  else if (steps < 0) return [];

  const paths = [];
  for (let i = 0; i < maxJump; i++) {
    for (const path of getStaircasePaths(steps - (i + 1), maxJump)) {
      paths.push([i + 1, ...path]);
    }
  }
  return paths;
}

const answer1 = getStaircasePaths(2, 1); // [[1, 1]]
console.log(answer1);
const answer2 = getStaircasePaths(3, 3); // [[1, 1, 1], [1, 2], [2, 1], [3]]
console.log(answer2);
const answer3 = getStaircasePaths(5, 1); // [[1, 1, 1, 1, 1]]
console.log(answer3);
const answer4 = getStaircasePaths(5, 2);
console.log(answer4);
/*
[
  [1, 1, 1, 1, 1],
  [1, 1, 1, 2],
  [1, 1, 2, 1],
  [1, 2, 1, 1],
  [1, 2, 2],
  [2, 1, 1, 1],
  [2, 1, 2],
  [2, 2, 1],
]
*/

/* 
    Points earned: 40
    382 ops/s (Higher is better)
    Cognitive complexity: 4 (Lower is better)
*/
