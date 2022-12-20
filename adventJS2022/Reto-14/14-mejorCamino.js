function getOptimalPath(path) {
  const optPath = path.reduceRight((prev, curr) => {
    return curr.map((val, i) => {
      return val + Math.min(prev[i], prev[i + 1]);
    });
  });
  return optPath[0];
}