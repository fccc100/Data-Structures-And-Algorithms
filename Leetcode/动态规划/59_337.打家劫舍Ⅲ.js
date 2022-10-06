// 337. 打家劫舍 III
// 小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 root 。

// 除了 root 之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果 两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警。

// 给定二叉树的 root 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。

// 递归
function rob(root) {
  function _rob(root) {
    if (root == null) {
      return 0;
    }
    if (root.left == null && root.right == null) {
      return root.val;
    }
    if (root.left == null) {
      return Math.max(_rob(root.right), _rob(root.right.left) + _rob(root.right.right) + root.val);
    }
    if (root.right == null) {
      return Math.max(_rob(root.left), _rob(root.left.left) + _rob(root.left.right) + root.val);
    }

    return Math.max(_rob(root.left) + _rob(root.right), _rob(root.left.left) + _rob(root.left.right) + _rob(root.right.left) + _rob(root.right.right) + root.val);
  }

  return _rob(root);
}

function rob(root) {
  function _rob(root) {
    if (root == null) {
      return 0;
    }
    if (root.left == null && root.right == null) {
      return root.val;
    }
    if (root.maxVal) {
      return root.maxVal;
    }
    if (root.left == null) {
      return root.maxVal = Math.max(_rob(root.right), _rob(root.right.left) + _rob(root.right.right) + root.val);
    }
    if (root.right == null) {
      return root.maxVal = Math.max(_rob(root.left), _rob(root.left.left) + _rob(root.left.right) + root.val);
    }

    return root.maxVal = Math.max(_rob(root.left) + _rob(root.right), _rob(root.left.left) + _rob(root.left.right) + _rob(root.right.left) + _rob(root.right.right) + root.val);
  }

  return _rob(root);
}