const files = ["photo", "postcard", "photo", "photo", "video"];
const files2 = ["file", "file", "file", "game", "game"];
const files3 = ["file", "file(1)", "icon", "icon(1)", "icon(1)"];

function fixFiles(files) {
  const result = files.map((file, i) => {
    const filterFile = files.slice(0, i).filter((f) => f === file);
    return filterFile.length === 0 
      ? file 
      : `${file}(${filterFile.length})`;
  });
  return result;
}
console.log(fixFiles(files)); // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']
fixFiles(files2); // ['file', 'file(1)', 'file(2)', 'game', 'game(1)'];

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
fixFiles(files3); // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
