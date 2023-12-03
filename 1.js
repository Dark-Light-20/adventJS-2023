function findFirstRepeated(gifts) {
  let firstRepeatedIndex;
  for (let index = 0; index < gifts.length - 1; index++) {
    const gift = gifts[index];
    const nextGiftIndex = gifts.indexOf(gift, index + 1);
    if (
      nextGiftIndex > 0 &&
      (!firstRepeatedIndex || nextGiftIndex < firstRepeatedIndex)
    )
      firstRepeatedIndex = nextGiftIndex;
  }
  return gifts[firstRepeatedIndex] ?? -1;
}

const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId); // 3
// Even though 2 and 3 are repeated
// 3 appears second time first

const giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2); // -1
// It is -1 since no number is repeated

const giftIds3 = [5, 1, 5, 1];
const firstRepeatedId3 = findFirstRepeated(giftIds3);
console.log(firstRepeatedId3); // 5

/* 
    Puntos conseguidos: 110
    3,381 ops/s (Higher is better)
    Cognitive complexity: 5 (Lower is better)
*/
