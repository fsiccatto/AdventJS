function canCarry(capacity, trip) {
  let can = true;
  let sumGifts = 0;
  const deliverys = {};
  
  for (let i = 0; i < trip.length; i++) {
    const [gifts, pickUp, delivery] = trip[i];
    sumGifts += gifts - (deliverys[pickUp] ?? 0);
    if (sumGifts > capacity) {
      can = false;
      break;
    }
    deliverys[delivery] = gifts;
  }
  return can;
}
// Ayuda de -> https://twitter.com/osso_master/status/1473419822679695367/photo/1 @osso-master
canCarry(4, [[2, 5, 8], [3, 6, 10]]);
canCarry(3, [[1, 1, 5], [2, 2, 10]]);
canCarry(3, [[2, 1, 5],[3, 5, 7]]);
canCarry(4, [[2, 3, 8],[2, 5, 7]]);
canCarry(1, [[2, 3, 8]]);
canCarry(2, [[1, 2, 4], [2, 3, 8]]);