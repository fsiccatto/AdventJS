function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let combinations = [];
  combinations.push([], [giftsCities[0]]);
  giftsCities.shift();

  giftsCities.map((city) => {
    const newList = combinations.map((combination) => {
      let _combination = [...combination];
      if (_combination.length < maxCities) {
        _combination.push(city);
      }
      return _combination;
    });
    combinations = combinations.concat(newList);
  });
  combinations.shift();

  return Math.max(
    ...combinations.map((combination) => {
      let sum = combination.reduce((total, num) => total + num);
      return sum > maxGifts ? 0 : sum;
    })
  );
}
