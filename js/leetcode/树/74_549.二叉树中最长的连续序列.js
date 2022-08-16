// 549. 二叉树中最长的连续序列
// 给定二叉树的根 root ，返回树中最长连续路径的长度。
// 连续路径是路径中相邻节点的值相差 1 的路径。此路径可以是增加或减少。

// 例如， [1,2,3,4] 和 [4,3,2,1] 都被认为有效，但路径 [1,2,4,3] 无效。
// 另一方面，路径可以是子-父-子顺序，不一定是父子顺序。

// 示例 1:

// 输入: root = [1,2,3]
// 输出: 2
// 解释: 最长的连续路径是 [1, 2] 或者 [2, 1]。

// 示例 2:

// 输入: root = [2,1,3]
// 输出: 3
// 解释: 最长的连续路径是 [1, 2, 3] 或者 [3, 2, 1]。

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
 * @return {number}
 */
var longestConsecutive = function (root) {
  if (root == null) {
    return 0;
  }

  // 最长上升路径
  function longestIncreasePath(root, preVal) {
    if (root == null) {
      return 0;
    }
    if (root.val != preVal + 1) {
      return 0;
    }
    return Math.max(longestIncreasePath(root.left, root.val), longestIncreasePath(root.right, root.val)) + 1;
  }

  // 最长下降路径
  function longestDeclinePath(root, preVal) {
    if (root == null) {
      return 0;
    }
    if (root.val != preVal - 1) {
      return 0;
    }

    return Math.max(longestDeclinePath(root.left, root.val), longestDeclinePath(root.right, root.val)) + 1;
  }

  // 当前根节点的最长连续序列，就是max(左子树的下降序列 + 右子树的上升序列, 左子树的上升序列 + 右子树的下降序列) + 1
  let cur = Math.max(longestIncreasePath(root.left, root.val) + longestDeclinePath(root.right, root.val), longestIncreasePath(root.right, root.val) + longestDeclinePath(root.left, root.val)) + 1;

  // 最长序列可能包含当前节点，结果即是cur， 或者在左子树，或者在右子树，取最大值
  return Math.max(cur, longestConsecutive(root.left), longestConsecutive(root.right));
};