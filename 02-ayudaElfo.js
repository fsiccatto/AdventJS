const carta = 'bici coche balon _playstation bici coche peluche';

function listGifts(letter) {
  let gifts = letter.trim().split(" "),
    regex = /^_/gi;
  let giftsObj = {};
  for (let i = 0; i < gifts.length; i++) {
    if (gifts[i].match(regex)) {
      continue;
    } else {
      giftsObj[gifts[i]] = (giftsObj[gifts[i]] || 0) + 1;
    }
  }
  return giftsObj;
}
listGifts(carta);