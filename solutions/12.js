function checkIsValidCopy(original, copy) {
  const degradations = {
    "#": ["+", ":", ".", " "],
    "+": [":", ".", " "],
    ":": [".", " "],
    ".": [" "],
  };
  const getDescendants = (letter) => {
    if (/^[A-Za-z]+$/.test(letter))
      return [letter, letter.toLowerCase(), "#", "+", ":", ".", " "];
    return degradations[letter];
  };
  for (let i = 0; i < original.length; i++) {
    const originalLetter = original[i];
    const copyLetter = copy[i];
    if (
      !(
        getDescendants(originalLetter)?.includes(copyLetter) ??
        originalLetter === copyLetter
      )
    )
      return false;
  }
  return true;
}

const answer1 = checkIsValidCopy(
  "Santa Claus is coming",
  "sa#ta cl#us is comin#"
); // true
console.log(answer1);

const answer2 = checkIsValidCopy(
  "Santa Claus is coming",
  "p#nt: cla#s #s c+min#"
); // false (for the initial p)
console.log(answer2);

const answer3 = checkIsValidCopy("Santa Claus", "s#+:. c:. s"); // true
console.log(answer3);

const answer4 = checkIsValidCopy("Santa Claus", "s#+:.#c:. s"); // false (there is a # where it should not be)
console.log(answer4);

const answer5 = checkIsValidCopy("3 #egalos", "3 .+:# #:"); // true
console.log(answer5);

/* 
    Puntos conseguidos: 210
    2,249 ops/s (Higher is better)
    Cognitive complexity: 6 (Lower is better)
*/
