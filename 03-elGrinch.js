function isValid(grinchLetter) {
  let regexOpen = /\(/g,
    regexClose = /\)/g,
    regexText = /\([a-zA-Z\u00C0-\u017F]+\)/gi; // Caracteres acentuado tambien
  if (regexOpen.test(grinchLetter) === false && regexClose.test(grinchLetter) === false) return true;
  if (grinchLetter.match(regexOpen)?.length !== grinchLetter.match(regexClose)?.length) return false;
  return (regexText.test(grinchLetter)) ? true : false;
}
(isValid("bici coche (balon) bici coche peluche"));
(isValid("(muneca) consola bici"));
(isValid("bici coche (balon bici coche"));
(isValid("(peluche {) bici"));
(isValid("() bici"));
(isValid("cleta ) algo"));