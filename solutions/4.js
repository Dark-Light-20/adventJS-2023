function decode(message) {
  const data = [[]];
  let actualNesting = 0;

  for (const letter of message) {
    if (letter === "(") {
      actualNesting++;
      if (!data[actualNesting]) data[actualNesting] = [];
      continue;
    } else if (letter === ")") {
      const reversed = [...data[actualNesting]].reverse();
      data[actualNesting] = [];
      actualNesting--;
      data[actualNesting].push(...reversed);
      continue;
    }
    data[actualNesting].push(letter);
  }

  return data[0].join("");
}

const a = decode("hola (odnum)");
console.log(a); // hola mundo

const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus

// Step by step:
// 1. Reverse the nested -> sa(ualcatn)s
// 2. Reverse the remaining one -> santaclaus

/* 
    Puntos conseguidos: 260
    2,376 ops/s (Higher is better)
    Cognitive complexity: 4 (Lower is better)
*/
