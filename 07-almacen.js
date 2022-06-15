/* Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.

Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.

La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. Veamos unos ejemplos: */

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
};
const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
};

function contains(store, product) {
  for (let key in store) {
    if (typeof store[key] === 'string') {
      if (store[key] === product) {
        return true;
      }
    } else {
      if (contains(store[key], product)) {
        return true;
      }
    }
  }
  return false;
}
(contains(almacen, 'camiseta'));
(contains(otroAlmacen, 'gameboy'));


// Otra forma de hacerlo es:
function contains2(store, product){
  const iterateStore = (store) => {
    return typeof store === "string" 
      ? store // Si es un string, devuelve el string
      : Object.values(store).map(iterateStore).flat(); // Si no, devuelve un array (aplastado) con los valores de los objetos.
  };
  const stock = iterateStore(store);
  return stock.includes(product);
}
(contains2(almacen, 'camiseta'));
(contains2(otroAlmacen, 'gameboy'));