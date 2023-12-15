function autonomousDrive(store, movements) {
  let initialPositionX = 0;
  let initialPositionY = store.findIndex((row) => {
    initialPositionX = row.indexOf("!");
    return initialPositionX !== -1;
  });

  store[initialPositionY] = store[initialPositionY].replace("!", ".");

  let currentX = initialPositionX;
  let currentY = initialPositionY;

  for (const movement of movements) {
    let nextX = currentX;
    let nextY = currentY;

    switch (movement) {
      case "R":
        nextX++;
        break;
      case "L":
        nextX--;
        break;
      case "U":
        nextY--;
        break;
      case "D":
        nextY++;
        break;
    }

    const nextValue = store[nextY]?.[nextX];
    const invalidValues = ["*", undefined, ""];
    if (!invalidValues.includes(nextValue)) {
      currentX = nextX;
      currentY = nextY;
    }
  }

  store[currentY] =
    store[currentY].slice(0, currentX) +
    "!" +
    store[currentY].slice(currentX + 1);

  return store;
}

const store = ["..!....", "...*.*."];

const movements = ["R", "R", "D", "L"];
const result = autonomousDrive(store, movements);
console.log(result);
/*
[
  ".......",
  "...*!*."
]
*/

// The last movement is to the left, but it cannot move because there is an obstacle.

/* 
    Puntos conseguidos: 200
    2,052 ops/s (Higher is better)
    Cognitive complexity: 7 (Lower is better)
*/
