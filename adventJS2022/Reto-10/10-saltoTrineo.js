function checkJump(heights) {
  const maxHeight = Math.max(...heights);
  const left = heights.splice(0, heights.indexOf(maxHeight));
  const right = heights;

  const condLeft = left.slice(1).every((n, i) => n >= left[i]);
  const condRight = right.slice(1).every((n, i) => n <= right[i]);

  return condLeft && condRight && left.length != 0 && heights.length > 1;
}
