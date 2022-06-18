function pangram(string) {
  const abecedario = 'abcdefghijklmnñopqrstuvwxyz'.split("");
  string = string.normalize("NFC").toLowerCase(); // normalize() -> elimina acentos y caracteres especiales!
  const match = abecedario.every(letter => string.includes(letter));
  match;
  return match;
}
pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho');
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!');
pangram('Esto es una frase larga pero no tiene todas las letras del abecedario');
pangram('De la a a la z, nos faltan letras');