function createXmasTree(height) {
  if (height <= 0 || height >= 100) return "Error";
  let tree = "",
    space = "_",
    star = "*",
    trunk = "#";
  for (let i = 0; i < height; i++) {
    tree += space.repeat(height - 1 - i) + star.repeat(i * 2 + 1) + space.repeat(height - 1 - i) + "\n";
  }
  tree += space.repeat(height - 1) + trunk + space.repeat(height - 1) + "\n"; // Agregamos el tronco
  tree += space.repeat(height - 1) + trunk + space.repeat(height - 1); // Agregamos el tronco
  return tree;
}
(createXmasTree(5));
(createXmasTree(1));