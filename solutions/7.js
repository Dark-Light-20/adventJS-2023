function drawGift(size, symbol) {
  // special cases
  if (size === 1) return "#\n";

  let part = size - 2;

  let topLine = " ".repeat(size - 1) + "#".repeat(size) + "\n";
  let centerLine = "#".repeat(size) + symbol.repeat(part) + "#" + "\n";
  let bottomLine = "#".repeat(size) + "\n";

  let topPart = "";
  let bottomPart = "";

  for (let i = 0; i < part; i++) {
    const line =
      " ".repeat(part - i) +
      "#" +
      symbol.repeat(part) +
      "#" +
      symbol.repeat(i) +
      "#";
    topPart += line + "\n";
    bottomPart = line.trim() + "\n" + bottomPart;
  }

  return topLine + topPart + centerLine + bottomPart + bottomLine;
}

const d1 = drawGift(4, "+");
console.log(d1);
console.log("----------------\n");
/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

const d2 = drawGift(5, "*");
console.log(d2);
console.log("----------------\n");
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

const d3 = drawGift(1, "^");
console.log(d3);
console.log("----------------\n");
/*
#
*/

/* 
    Puntos conseguidos: 270
    2,464 ops/s (Higher is better)
    Cognitive complexity: 3 (Lower is better)
*/
