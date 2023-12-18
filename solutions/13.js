function calculateTime(deliveries) {
  const limit = 7 * 3600;
  let accumulate = 0;
  for (const delivery of deliveries) {
    const hours = delivery.substring(0, 2);
    const minutes = delivery.substring(3, 5);
    const seconds = delivery.substring(6);
    const time = hours * 3600 + minutes * 60 + seconds * 1;
    accumulate += time;
  }
  const diference = accumulate - limit;
  if (diference < 0) {
    return "-" + new Date(-diference * 1000).toISOString().substring(11, 19);
  }
  return new Date(diference * 1000).toISOString().substring(11, 19);
}

const aswer1 = calculateTime(["00:10:00", "01:00:00", "03:30:00"]);
// '-02:20:00'
console.log(aswer1);

const aswer2 = calculateTime(["02:00:00", "05:00:00", "00:30:00"]);
// '00:30:00'
console.log(aswer2);

const aswer3 = calculateTime(["00:45:00", "00:45:00", "00:00:30", "00:00:30"]);
// '-05:29:00'
console.log(aswer3);

/* 
    Puntos conseguidos: 270
    2,579 ops/s (Higher is better)
    Cognitive complexity: 2 (Lower is better)
*/
