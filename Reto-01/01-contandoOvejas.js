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