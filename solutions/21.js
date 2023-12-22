function findBalancedSegment(message) {
  let sum = 0;
  let currentAnswer = [];
  let sumMap = { 0: -1 }; // Initialize with sum 0 at index -1

  for (let i = 0; i < message.length; i++) {
    sum += message[i] ? 1 : -1;

    if (sum in sumMap) {
      const startIndex = sumMap[sum] + 1;
      const isNewAnswerLonger =
        !currentAnswer.length ||
        currentAnswer[1] - currentAnswer[0] < i - startIndex;
      if (isNewAnswerLonger) {
        currentAnswer = [startIndex, i];
      }
    } else {
      sumMap[sum] = i;
    }
  }

  return currentAnswer;
}

const answer1 = findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]);
//                                         |________|
// position of segment:                      [2, 5]
// longest balanced
// of 0s and 1s
console.log(answer1);

const answer2 = findBalancedSegment([1, 1, 0]);
//                                      |__|
//                                     [1, 2]
console.log(answer2);

const answer3 = findBalancedSegment([1, 1, 1]);
// no balanced segments: []
console.log(answer3);

/* 
    Points earned: 210
    2,121 ops/s (Higher is better)
    Cognitive complexity: 6 (Lower is better)
*/
