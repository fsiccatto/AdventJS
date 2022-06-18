/* 
  Símbolo       Valor
  .             1
  ,             5
  :             10
  ;             50
  !             100

Los símbolos se restan si están inmediatamente a la izquierda de otro mayor. */
function decodeNumbers(symbols) {
  const symbolsValues = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100,
  };
  symbols = symbols.split("").reverse();
  return symbols.reduce((sum, symbol, i) => {
    if (!symbolsValues[symbol]) return NaN;
    return symbolsValues[symbols[i - 1]] > symbolsValues[symbol]
      ? sum - symbolsValues[symbol]
      : sum + symbolsValues[symbol];
  }, 0);
}
decodeNumbers("...");
decodeNumbers(".,");
decodeNumbers(",.");
decodeNumbers(",...");
decodeNumbers(".........!");
decodeNumbers(".;");
decodeNumbers("..,");
decodeNumbers("..,!");
decodeNumbers(".;!");
decodeNumbers("!!!");
decodeNumbers(";!");
decodeNumbers(";.W");
