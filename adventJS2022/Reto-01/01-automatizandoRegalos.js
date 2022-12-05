function wrapping(gifts) {
  return gifts.map(gift => {
    const a = '*'.repeat(gift.length + 2);
    return [a, `*${gift}*`, a].join('\n');
  })
}