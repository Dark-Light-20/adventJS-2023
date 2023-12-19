function revealSabotage(store) {
  const directions = [
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, 0],
    [1, -1],
    [1, 1],
  ];

  for (let i = 0; i < store.length; i++) {
    for (let j = 0; j < store[i].length; j++) {
      if (store[i][j] !== "*") {
        let blocked = 0;
        for (const [x, y] of directions)
          blocked += store[i + x]?.[j + y] === "*";
        store[i][j] = blocked ? blocked.toString() : " ";
      }
    }
  }

  return store;
}

const store = [
  ["*", " ", " ", " "],
  [" ", " ", "*", " "],
  [" ", " ", " ", " "],
  ["*", " ", " ", " "],
];

const answer1 = revealSabotage(store);
console.log(answer1);

/* Should display:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/

/* 
    Puntos conseguidos: 30
    823 ops/s (Higher is better)
    Cognitive complexity: 5 (Lower is better)
*/
