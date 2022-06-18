function learn(time, courses) {
  let arr = null; // Si no hay cursos que cumplan con el tiempo, retornamos null
  let bestTime = 0;
  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      if (i === j) continue; // No puede ser el mismo curso dos veces!
      const sum = courses[i] + courses[j];
      if (sum > bestTime && sum <= time) {
        bestTime = sum;
        arr = [i, j];
        arr;
      }
    }
  }
  arr;
  return arr;
}

learn(10, [2, 3, 8, 1, 4]);
learn(15, [2, 10, 4, 1]);
learn(25, [10, 15, 20, 5])
learn(8, [8, 2, 1, 4, 3]);
learn(4, [10, 14, 20]);
