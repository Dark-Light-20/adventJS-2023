function travelDistance(map) {
  let distance = 0;
  const positions = {};
  const rows = map.split("\n");
  for (const [posY, row] of rows.entries()) {
    for (const [posX, char] of row.split("").entries()) {
      positions[char] = [posX, posY];
    }
  }
  delete positions["."];
  let currentPos = positions["S"];
  delete positions["S"];
  for (const value of Object.values(positions)) {
    distance +=
      Math.abs(currentPos[0] - value[0]) + Math.abs(currentPos[1] - value[1]);
    currentPos = value;
  }
  return distance;
}

const map = `.....1....
..S.......
..........
....3.....
......2...`;

const result = travelDistance(map);
console.log(result); // -> 12 km
/*
From S to kid 1: 4 moves
From kid 1 to 2: 5 moves
From kid 2 to 3: 3 moves
Total: 12 moves
*/

const result2 = travelDistance(`..S.1...`);
console.log(result2); // -> 2

/* 
    Points earned: 190
    1,073 ops/s (Higher is better)
    Cognitive complexity: 1 (Lower is better)
*/
