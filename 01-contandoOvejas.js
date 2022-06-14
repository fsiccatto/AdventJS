/* Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios. */
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
];

function contarOvejas(ovejas) {
  let regex = /n{1,}a{1,}/gi,
    ovejasRojas = [];
  for (let i = 0; i < ovejas.length; i++) {
    if (ovejas[i].color === "rojo" && ovejas[i].name.match(regex)) {
      ovejasRojas.push(ovejas[i]);
    };
  }; 
  return ovejasRojas;
}
contarOvejas(ovejas);