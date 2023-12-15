function maxGifts(houses) {
  let n = houses.length;
  if (n === 1) return houses[0];

  let nonConsecutiveSums = Array(n)
    .fill(0)
    .map(() => Array(2).fill(0));

  nonConsecutiveSums[0][0] = 0;
  nonConsecutiveSums[0][1] = houses[0];

  for (let i = 1; i < n; i++) {
    nonConsecutiveSums[i][0] = Math.max(
      nonConsecutiveSums[i - 1][0],
      nonConsecutiveSums[i - 1][1]
    );
    nonConsecutiveSums[i][1] = nonConsecutiveSums[i - 1][0] + houses[i];
  }

  return Math.max(nonConsecutiveSums[n - 1][0], nonConsecutiveSums[n - 1][1]);
}

const answer1 = maxGifts([2, 4, 2]); // 4 (4)
console.log(answer1);

const answer2 = maxGifts([5, 1, 1, 5]); // 10 (5 + 5)
console.log(answer2);

const answer3 = maxGifts([4, 1, 1, 4, 2, 1]); // 9 (4 + 4 + 1)
console.log(answer3);

const answer4 = maxGifts([1, 3, 1, 3, 100]); // 103 (3 + 100)
console.log(answer4);

/* 
    Puntos conseguidos: 110
    1,329 ops/s (Higher is better)
    Cognitive complexity: 6 (Lower is better)
*/
