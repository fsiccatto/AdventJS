function countTime(leds) {
  let arrLeds = leds.join("").split("1");
  arrLeds[0] += arrLeds.pop();
  return Math.max(...arrLeds.map((led) => led.length)) * 7;
}
