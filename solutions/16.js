function transformTree(tree) {
  function arrayToTree(arr, i = 0) {
    if (i >= arr.length || arr[i] === null) return null;
    return {
      value: arr[i],
      left: arrayToTree(arr, 2 * i + 1),
      right: arrayToTree(arr, 2 * i + 2)
    };
   }
   
  const root = arrayToTree(tree);

  return root;
}

const tree = transformTree([3, 1, 0, 8, 12, null, 1]);
console.log(tree);
/*
{
  value: 3,
  left: {
    value: 1,
    left: {
      value: 8,
      left: null,
      right: null
    },
    right: {
      value: 12,
      left: null,
      right: null
    }
  },
  right: {
    value: 0,
    left: null,
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
}
*/

/* 
    Puntos conseguidos: 140
    1,009 ops/s (Higher is better)
    Cognitive complexity: 4 (Lower is better)
*/
