function getCoins(change) {
  let coins = [1, 2, 5, 10, 20, 50];
  coins.reverse();
  let result = [];
  
  result = coins.reduce((acc, coin, i) => {
    acc[i] = Math.floor(change / coin); // división entre el cambio y la moneda
    console.log(acc);
    change = change % coin; // el cambio es el resto del cambio y la moneda
    console.log(change);
    return acc;
  }, Array(coins.length).fill(0)); // Devolvemos un array de longitud coins.length con todos los valores 0 de las monedas no requeridas
  return result.reverse();
}
// Otra solucion mas elegante
/* return result = coins.map((coin) => {
  let coinNeeded = Math.floor(change / coin);
  change = change % coin;
  return coinNeeded;
}).reverse(); */

console.log(getCoins(51));
console.log(getCoins(3));
console.log(getCoins(5));
console.log(getCoins(16));
console.log(getCoins(100));