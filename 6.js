function maxDistance(movements) {
  let maxDistance = 0;
  let adtionalDistance = 0;
  for (const movement of movements) {
    if (movement === ">") {
      maxDistance++;
    } else if (movement === "<") {
      maxDistance--;
    } else {
      adtionalDistance++;
    }
  }
  return Math.abs(maxDistance) + adtionalDistance;
}

const movements = ">>*<";
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = ">***>";
const result3 = maxDistance(movements3);
console.log(result3); // -> 5

/* 
    Puntos conseguidos: 370
    3,166 ops/s (Higher is better)
    Cognitive complexity: 3 (Lower is better)
*/
