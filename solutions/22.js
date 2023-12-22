function compile(code) {
  let counter = 0;
  let returnPoint;

  for (let i = 0; i < code.length; i++) {
    const actualCode = code[i];
    switch (actualCode) {
      case "+":
        counter++;
        break;
      case "-":
        counter--;
        break;
      case "*":
        counter *= 2;
        break;
      case "%":
        returnPoint = i;
        break;
      case "<":
        if (returnPoint) i = returnPoint;
        returnPoint = undefined;
        break;
      case "¿":
        if (counter <= 0) {
          i = code.indexOf("?", i + 1);
        }
        break;
    }
  }

  return counter;
}

const answer1 = compile("++*-"); // 3
console.log(answer1);
// (1 + 1) * 2 - 1 = 3

const answer2 = compile("++%++<"); // 6
console.log(answer2);
// 1 + 1 + 1 + 1 + 1 + 1 = 6

const answer3 = compile("++<--"); // 0
console.log(answer3);
// 1 + 1 - 1 - 1 = 0

const answer4 = compile("++¿+?"); // 3
console.log(answer4);
// 1 + 1 + 1 = 3

const answer5 = compile("--¿+++?"); // -2
console.log(answer5);
// - 1 - 1 = -2

/* 
    Points earned: 250
    3,083 ops/s (Higher is better)
    Cognitive complexity: 10 (Lower is better)
*/
