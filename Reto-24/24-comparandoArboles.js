const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
};
const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
};

function checkIsSameTree(treeA, treeB) {
  if (!treeA && !treeB) return true;
  if (treeA?.value !== treeB?.value) return false;
  return checkIsSameTree(treeA.left, treeB.left) && checkIsSameTree(treeA.right, treeB.right);
}
checkIsSameTree(tree, tree);
checkIsSameTree(tree, tree2);
checkIsSameTree(tree2, tree2);