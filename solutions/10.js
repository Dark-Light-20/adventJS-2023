function createChristmasTree(ornaments, height) {
  let tree = "";
  let actualOrnament;
  let actualIndex = 0;

  for (let level = 1; level <= height; level++) {
    let line = " ".repeat(height - level);
    for (let i = 1; i <= level; i++) {
      actualOrnament = ornaments.charAt(actualIndex);
      line += actualOrnament;
      if (i < level) line += " ";
      actualIndex++;
      if (actualIndex === ornaments.length) actualIndex = 0;
    }
    tree += line + "\n";
  }
  let base = " ".repeat(height - 1) + "|\n";
  return tree + base;
}

const tree1 = createChristmasTree("123", 4);
console.log(tree1);
/* 
   1
  2 3
 1 2 3
1 2 3 1
   |
*/

const tree2 = createChristmasTree("*@o", 3);
console.log(tree2);
/* 
  *
 @ o
* @ o
  |
*/

/* 
    Puntos conseguidos: 250
    2,228 ops/s (Higher is better)
    Cognitive complexity: 5 (Lower is better)
*/
