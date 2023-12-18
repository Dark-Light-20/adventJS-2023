function adjustLights(lights) {
  let answer = 0;
  let firstCount = 0;
  let secondCount = 0;
  let actualValidation = true;
  for(const light of lights) {
    if((light === "🟢") !== actualValidation) {
      firstCount++;
    }
    else {
      secondCount++;
    }
    actualValidation = !actualValidation;
  }
  answer = Math.min(firstCount, secondCount);
  return answer;
}

const change1 = adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]);
console.log(change1);
// -> 1 (you change the fourth light to 🔴)

const change2 = adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]);
console.log(change2);
// -> 2 (you change the second light to 🟢 and the third to 🔴)

const change3 = adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]);
console.log(change3);
// -> 0 (they are already alternating)

const change4 = adjustLights(["🔴", "🔴", "🔴"]);
console.log(change4);
// -> 1 (you change the second light to 🟢)

/* 
    Puntos conseguidos: 380
    3,062 ops/s (Higher is better)
    Cognitive complexity: 2 (Lower is better)
*/
