function checkSledJump(heights) {
  if (heights.length < 3) return false;
  let maxHeight = {
    value: Math.max(...heights),
    index: heights.indexOf(Math.max(...heights))
  };
  let down = false;
  let up = false;
  let lastHeight = null; // Lo tenemos que inicar null porque sino no nos daria false al ser la ultima altura con la altura del momento.
  
  for (let i = 0; i < heights.length; i++) {
    let height = heights[i];
    
    // Si hay un movimiento lineal de posicion, false
    if (height === lastHeight) return false

    // Bajada
    if (i > maxHeight.index) {
      down = true;
      if (lastHeight < height) return false;
    };

    // Si no es bajada, es subida
    if (i < maxHeight.index) {
      up = true;
      if (lastHeight > height) return false;
    };
    lastHeight = height; // Actualizamos la ultima altura
  }
  return up && down;
}

checkSledJump([1, 2, 3, 2, 1]);
checkSledJump([0, 1, 0]);
checkSledJump([0, 3, 2, 1]);
checkSledJump([0, 1000, 1]);
checkSledJump([2, 4, 4, 6, 2]);
checkSledJump([1, 2, 3]);
checkSledJump([1, 2, 3, 2, 1, 2, 3]);