function cyberReindeer(road, time) {
  let movements = [road];
  let originalRoad = "." + road.slice(1);
  let sledPosition = 0;
  for (let i = 1; i < time; i++) {
    let newRoad = movements[i - 1];
    if (i === 5) {
      newRoad = newRoad.replaceAll("|", "*");
      originalRoad = originalRoad.replaceAll("|", "*");
    }
    if ([".", "*"].includes(newRoad[sledPosition + 1])) {
      newRoad =
        newRoad.slice(0, sledPosition) +
        originalRoad[sledPosition] +
        "S" +
        newRoad.slice(sledPosition + 2);
      sledPosition++;
    }
    movements.push(newRoad);
  }
  return movements;
}

const road = "S..|...|..";
const time = 10; // units of time
const result = cyberReindeer(road, time);
console.log(result);

/* -> result:
[
  'S..|...|..', // initial state
  '.S.|...|..', // sled advances on the road
  '..S|...|..', // sled advances on the road
  '..S|...|..', // sled stops at the barrier
  '..S|...|..', // sled stops at the barrier
  '...S...*..', // barrier opens, sled advances
  '...*S..*..', // sled advances on the road
  '...*.S.*..', // sled advances on the road
  '...*..S*..', // sled advances on the road
  '...*...S..', // passes through the open barrier
]
*/

/* 
    Puntos conseguidos: 160
    1,671 ops/s (Higher is better)
    Cognitive complexity: 4 (Lower is better)
*/
