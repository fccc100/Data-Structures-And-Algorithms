// 101. 对称二叉树
// 给你一个二叉树的根节点 root ， 检查它是否轴对称。

// 示例 1：

// 输入：root = [1,2,2,3,4,4,3]
// 输出：true
// 示例 2：

// 输入：root = [1,2,2,null,3,null,3]
// 输出：false

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root == null) {
    return true;
  }

  function isSameTree(p, q) {
    if (p == null && q == null) {
      return true;
    }
    if (p == null) {
      return false;
    }
    if (q == null) {
      return false;
    }

    if (p.val != q.val) {
      return false;
    }

    return isSameTree(p.left, q.right) && isSameTree(p.right, q.left);
  }

  return isSameTree(root.left, root.right);
};