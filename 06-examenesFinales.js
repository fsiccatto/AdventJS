/* A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.

La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces pueden haber más de dos valores que sumen, se devolverá el primero empezando por la izquierda que encuentre otro par, sin importar lo lejos que esté a la derecha.

Si no se encuentra, se devuelve null. */

function sumPairs(numbers, result) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === result) return [numbers[i], numbers[j]];
    }
  }
  return null
}
(sumPairs([3, 5, 7, 2], 10));
(sumPairs([-3, -2, 7, -5], 10));
(sumPairs([2, 2, 3, 1], 4));
(sumPairs([6, 7, 1, 2], 8));
(sumPairs([0, 2, 2, 3, -1, 1, 5], 6));