/* Con la emoción, ya estamos empezando a contar los días del calendario hasta el 25 de diciembre 📆.

Para ayudar a esto, vamos a crear una función que pasándole una instancia de Date nos diga el número de días que faltan. */

function daysToXmas(date) {
  // Creamos una fecha de navidad para el año 2022
  let xmas = new Date('Dec 25 2022');
  return days = Math.ceil((xmas - date) / (1000 * 60 * 60 * 24));
}
(daysToXmas(new Date ('Dec 1, 2022')));
(daysToXmas(new Date ('Dec 23, 2022')));
(daysToXmas(new Date ('Dec 24, 2022 00:00:01')));
(daysToXmas(new Date ('June 14, 2022')));