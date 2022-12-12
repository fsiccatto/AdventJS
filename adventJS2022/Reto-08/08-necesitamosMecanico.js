function checkPart(part) {
  return [...part].some((_, i, partArray) => {
    let word = partArray.filter((_, y) => y != i);
    return word.join("") == word.reverse().join("");
  });
}
