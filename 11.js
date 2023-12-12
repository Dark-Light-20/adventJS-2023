function getIndexsForPalindrome(word) {
  const reversed = word.split("").reverse().join("");
  if (word === reversed) {
    return [];
  }
  for (let i = 0; i < word.length - 1; i++) {
    for (let j = i + 1; j < word.length; j++) {
      const letters = word.split("");
      letters[i] = word[j];
      letters[j] = word[i];
      const newWord = letters.join("");
      const newReversed = letters.reverse().join("");
      if (newWord === newReversed) {
        return [i, j];
      }
    }
  }
  return null;
}

const answer1 = getIndexsForPalindrome("anna"); // []
console.log(answer1);

const answer2 = getIndexsForPalindrome("abab"); // [0, 1]
console.log(answer2);

const answer3 = getIndexsForPalindrome("abac"); // null
console.log(answer3);

const answer4 = getIndexsForPalindrome("aaaaaaaa"); // []
console.log(answer4);

const answer5 = getIndexsForPalindrome("aaababa"); // [1, 3]
console.log(answer5);

const answer6 = getIndexsForPalindrome("caababa"); // null
console.log(answer6);

/* 
    Puntos conseguidos: 30
    535 ops/s (Higher is better)
    Cognitive complexity: 5 (Lower is better)
*/
