function manufacture(gifts, materials) {
  return gifts.filter((gift) => {
    const giftLetters = gift.split("");
    const materialLetters = materials.split("");
    for (const letter of giftLetters) {
      const letterIndex = materialLetters.indexOf(letter);
      if (letterIndex < 0) return false;
    }
    return true;
  });
}

const gifts1 = ["tren", "oso", "pelota"];
const materials1 = "tronesa";

console.log(manufacture(gifts1, materials1)); // ["tren", "oso"]

const gifts2 = ["juego", "puzzle"];
const materials2 = "jlepuz";

console.log(manufacture(gifts2, materials2)); // ["puzzle"]

const gifts3 = ["libro", "ps5"];
const materials3 = "psli";

console.log(manufacture(gifts3, materials3)); // []

/* 
    Puntos conseguidos: 270
    2,018 ops/s (Higher is better)
    Cognitive complexity: 3 (Lower is better)
*/
