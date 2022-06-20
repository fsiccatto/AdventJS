function canReconfigure(from, to) {
  if (from.length !== to.length) return false;

  let result = true;
  const letters = {};

  for (let i = 0; i < from.length; i++) {
    const letterFrom = from[i];
    const letterTo = to[i];

    if (letters[letterFrom] && letters[letterFrom] !== letterTo) {
      result = false;
      break;
    }
    
    if (letters[letterTo] && letters[letterTo] !== letterFrom) {
      result = false;
      break;
    }

    letters[letterFrom] = letterTo;
    letters[letterTo] = letterFrom;
  }
  return result;
};

const from = 'BAL'
const to   = 'LIB'
console.log(canReconfigure(from, to)); // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

// const from = 'CON';
// const to   = 'JUU';
// console.log(canReconfigure(from, to)); // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

// const from = 'XBOX';
// const to   = 'XXBO';
// canReconfigure(from, to); // false
/* no se puede hacer la transformación:
X -> X
B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra)
O -> B
X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)
*/

// const from = 'XBOX'
// const to   = 'XOBX'
// canReconfigure(from, to) // true

// const from = 'MMM'
// const to   = 'MID'
// canReconfigure(from, to) // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

// const from = 'AA'
// const to   = 'MID'
// canReconfigure(from, to) // false -> no tiene la misma longitud