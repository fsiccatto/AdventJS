function missingReindeer(ids) {
  let missingReindeer;
  ids.sort((a,b) => a - b);
  for (let i = 0; i < ids.length; i++) {
    if (ids.indexOf(i + 1) === -1) {
      missingReindeer = i + 1;
      return missingReindeer;
    }
  }
  if ([...ids] !== 0) return 0;
}
// Otra forma mucho más eficiente de hacerlo. By: @Daviidm_16 https://twitter.com/Daviidm_16/status/1470806198953906186

/* const index = ids
  .indexOf(ids.sort((a, b) => a - b)
  .filter((reno, i) => reno !== i)[0]);
return index === -1 ? Math.max(...ids) + 1 : index; */

missingReindeer([0, 2, 3]);
missingReindeer([5, 6, 1, 2, 3, 7, 0]);
missingReindeer([0, 1]);
missingReindeer([3, 0, 1]);
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]);
missingReindeer([0]);
missingReindeer([1]);