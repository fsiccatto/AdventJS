function distributeGifts(packOfGifts, reindeers) {
  const maxWeight = reindeers.reduce((acc, reindeer) => acc + reindeer.length * 2, 0);
  const maxPackage = packOfGifts.reduce((maxBox, gift) => maxBox + gift.length, 0);
  return Math.floor(maxWeight / maxPackage)
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

console.log(distributeGifts(packOfGifts, reindeers));