const are_identical = function(root1, root2) {
  if (!root1 && !root2) {
    return true;
  }

  if (root1 && root2) {
    return (
      root1.value === root2.value &&
      are_identical(root1.left, root2.left) &&
      are_identical(root1.right, root2.right)
    );
  }

  return false;
};

module.exports = are_identical;
