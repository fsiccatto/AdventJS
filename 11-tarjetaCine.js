// Entrada de un solo uso -> 12 por pelicula
// Tarjeta de fidelidad -> valor de 250, pero pagas el 75% y es acumulable
function shouldBuyFidelity(times) {
  if (times === 0 || times <= -1) {
    return "Fuiste al cine 0 veces";
  }
  let dayTicket = 12 * times;
  let fidelityCard = 250;
  for (let i = 1; i <= times; i++) {
    fidelityCard += 12 * 0.75 ** i; // 75% de descuento por cada uso, elevado a la potencia de i (0.75)^i
  }
  return fidelityCard < dayTicket;
}
shouldBuyFidelity(1);
shouldBuyFidelity(100);