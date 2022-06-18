const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
];

const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []]
];

function countPackages(carriers, carrierID) {
  // Buscamos el carrier que nos interesa.
  const carrier = carriers.filter(carrier => carrier[0] === carrierID)[0];

  // Sumamos los paquetes del carrier principal y luego los de cada uno del equipo (ingresando nuevamente a la funcion).
  const packages = carrier[2].reduce((packages, teamMember) => {
    return packages + countPackages(carriers, teamMember);
  }, carrier[1]);
  
  return packages;
}

console.log(countPackages(carriers, 'dapelu')); // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9
// console.log(countPackages(carriers2, 'camila')); // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15