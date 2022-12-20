function getFilesToBackup(lastBackup, changes) {
  let needBackUp = changes
    .sort((a, b) => a[0] - b[0])
    .filter((change) => change[1] > lastBackup)
    .map((change) => change[0]);
  return [...new Set(needBackUp)];
}
