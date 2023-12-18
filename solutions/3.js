function findNaughtyStep(original, modified) {
  let larger = original;
  let added = false;
  if (modified.length > original.length) {
    larger = modified;
    added = true;
  }
  for (let i = 0; i < larger.length; i++) {
    if (original[i] !== modified[i]) {
      return added ? modified[i] : original[i];
    }
  }
  return "";
}

const original1 = "abcd";
const modified1 = "abcde";
console.log(findNaughtyStep(original1, modified1)); // 'e'

const original2 = "stepfor";
const modified2 = "stepor";
console.log(findNaughtyStep(original2, modified2)); // 'f'

const original3 = "abcde";
const modified3 = "abcde";
console.log(findNaughtyStep(original3, modified3)); // ''

/* 
    Puntos conseguidos: 350
    3,247 ops/s (Higher is better)
    Cognitive complexity: 5 (Lower is better)
*/
