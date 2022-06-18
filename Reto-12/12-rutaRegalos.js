// Longitudes de salto:
// 1 caería en el 2
// 2 caería en el 2
// 3 caería en el 6
// 4 caería en el 4
// 5 caería en el 10
// 6 caería en el 6
// 7 es el ideal!!! ✅

function getMinJump(obstacles) {
  let maxJump = Math.max(...obstacles);
  for (let jump = 2; jump <= maxJump + 1; jump++) { // Como no puede haber obstaculos en 0, pero si en 1, empezamos en 2 hasta el máximo obstaculo
    if (obstacles.every(obstacle => obstacle % jump !== 0)) { // Si con el cociente entre el obstaculo y el salto, el resto es distinto de 0, entonces retornamos el salto
      return jump;
    }
  }
}
getMinJump([5, 3, 6, 7, 9]);
getMinJump([2, 4, 6, 8, 10]);
getMinJump([1, 2, 3, 5]);
getMinJump([3, 7, 5]);
getMinJump([9, 5, 1]);
getMinJump([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);