function getCompleted(part, total) {
  const MCD = (a, b) => {
    let c;
    while (b) {
      c = b;
      b = a % b;
      a = c;
    }
    return a;
  };

  part = part.split(":");
  total = total.split(":");

  const partSec = +part[0] * 3600 + +part[1] * 60 + +part[2];
  const totalSec = +total[0] * 3600 + +total[1] * 60 + +total[2];
  const MCDof = MCD(partSec, totalSec);

  const partEnd = partSec / MCDof;
  const totalEnd = totalSec / MCDof;

  return partEnd + "/" + totalEnd;
}
