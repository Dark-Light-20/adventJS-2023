function organizeGifts(gifts) {
  let organizedGifts = "";
  const giftsArray = gifts.match(/\d+\w/g);
  for (const gift of giftsArray) {
    const [amount, type] = gift.match(/\d+|\w/g);
    const palettes = Math.floor(amount / 50);
    const remainingFromPalettes = amount % 50;
    const boxes = Math.floor(remainingFromPalettes / 10);
    const remainingFromBoxes = remainingFromPalettes % 10;
    organizedGifts += `[${type}]`.repeat(palettes) + `{${type}}`.repeat(boxes);
    if (remainingFromBoxes > 0)
      organizedGifts += `(${type.repeat(remainingFromBoxes)})`;
  }
  return organizedGifts;
}

const result1 = organizeGifts("76a11b");
console.log(result1);
// `[a]{a}{a}(aaaaaa){b}(b)`

/* Explanation:

  76a: 76 gifts type 'a' would be packed in 7 boxes and 6 gifts would be left, resulting in 1 pallet [a] (for the first 5 boxes), 2 loose boxes {a}{a} and a bag with 6 gifts (aaaaaa)

  11b: 11 gifts type 'b' would be packed in 1 box and 1 gift would be left, resulting in 1 loose box {b} and a bag with 1 gift (b)

/* 
    Puntos conseguidos: 280
    2,445 ops/s (Higher is better)
    Cognitive complexity: 2 (Lower is better)
*/
