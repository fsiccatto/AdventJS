/* El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis... 

Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch */

function isValid(grinchLetter) {  // ¡No dejes que el Grinch gane!
  let regexOpen = /\(/g,
    regexClose = /\)/g,
    regexText = /\([a-zA-Z\u00C0-\u017F]+\)/gi; // Caracteres acentuado tambien
  if (regexOpen.test(grinchLetter) === false && regexClose.test(grinchLetter) === false) return true;
  if (grinchLetter.match(regexOpen)?.length !== grinchLetter.match(regexClose)?.length) return false;
  return (regexText.test(grinchLetter)) ? true : false;
}
(isValid("bici coche (balon) bici coche peluche"));
(isValid("(muneca) consola bici"));
(isValid("bici coche (balon bici coche"));
(isValid("(peluche {) bici"));
(isValid("() bici"));
(isValid("cleta ) algo"));