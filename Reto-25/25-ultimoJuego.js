const room = [
  [" ", " ", " "],
  [" ", " ", "m"],
  [" ", " ", "*"],
];
const room2 = [
  ["*", " ", " ", " "],
  [" ", "m", "*", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", "*"],
];

function canMouseEat(direction, game) {
  const y = game.findIndex((row) => row.includes("m")); // Buscamos la posicion del ratoncito en y
  const x = game[y].indexOf("m"); // Buscamos la posicion del ratoncito en x

  const moves = {
    up: y === 0 ? false : game[y - 1][x],
    down: y === game.length - 1 ? false : game[y + 1][x],
    right: x === game[y].length - 1 ? false : game[y][x + 1],
    left: x === 0 ? false : game[y][x - 1],
  };
  console.log(moves[direction] === "*");
  return moves[direction] === "*";
}

canMouseEat("up", room); // false
canMouseEat("down", room); // true
canMouseEat("right", room); // false
canMouseEat("left", room); // false

canMouseEat("up", room2); // false
canMouseEat("down", room2); // false
canMouseEat("right", room2); // true
canMouseEat("left", room2); // false
