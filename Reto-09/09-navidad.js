function groupBy(collection, funprop) {
  const result = {};
  collection.forEach((item) => {
    let key = typeof funprop === "function" // preguntamos si funprop es una funcion o una propiedad
      ? funprop(item) // si es una función, pasamos item a la función
      : item[funprop]; // si no es una función, es una propiedad
    if (!result[key]) result[key] = []; // si no existe la key, la creamos --- Otra forma de hacerlo: result[key] ??= []; 
    result[key].push(item); // agregamos el item a la key
  });
  return result;
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy(['one', 'two', 'three'], 'length'));
console.log(groupBy([{age: 23}, {age: 24}], 'age'));

console.log(groupBy(
  [1397639141184, 1363223700000],
  timestamp => new Date(timestamp).getFullYear()
));

console.log(groupBy([
  { title: 'JavaScript: The Good Parts', rating: 8 },
  { title: 'Aprendiendo Git', rating: 10 },
  { title: 'Clean Code', rating: 9 },
], 'rating'));