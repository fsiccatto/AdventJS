/* ¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

Argumento de 5:
____*____
___***___
__*****__
_*******_
*********
____#____
____#____ */

function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones!
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