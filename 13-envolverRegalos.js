function wrapGifts(gifts) {
  if (gifts.length === 0) return [];
  let wrap = "*"
  let amountGifts = gifts[0].length;
  let giftAlreadyWrapped = [];

  let result = gifts.map((gift) => {
    let giftWrapper = "*" + gift + "*";
    return giftWrapper;
  });
  giftAlreadyWrapped = [wrap.repeat(amountGifts + 2), ...result, wrap.repeat(amountGifts + 2)];
  return giftAlreadyWrapped;
}

wrapGifts(["📷", "⚽️"]);
wrapGifts(["🏈🎸", "🎮🧸"]);
wrapGifts(["📷"]);