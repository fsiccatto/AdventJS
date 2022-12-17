function selectSleigh(distance, sleighs) {
  let bestSleigh = sleighs.filter((sleigh) => {
    const wattCons = distance * sleigh.consumption;
    return 20 >= wattCons;
  }).at(-1);
  return bestSleigh ? bestSleigh.name : null;
}