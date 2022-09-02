// 687. 最长同值路径
// 给定一个二叉树的 root ，返回 最长的路径的长度 ，这个路径中的 每个节点具有相同值 。 这条路径可以经过也可以不经过根节点。

// 两个节点之间的路径长度 由它们之间的边数表示。

// 示例 1:

// 输入：root = [5,4,5,1,1,5]
// 输出：2
// 示例 2:

// 输入：root = [1,4,5,4,4,5]
// 输出：2

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
var longestUnivaluePath = function(root) {
  if (root == null) {
    return 0;
  }

  // 从根root到叶子节点的最长同值路径
  function longestPath(root, val) {
    if (root == null) {
      return 0;
    }

    if (root.val != val) {
      return 0;
    }

    return Math.max(longestPath(root.left, val), longestPath(root.right, val)) + 1;
  }

  return Math.max(longestPath(root.left, root.val) + longestPath(root.right, root.val), longestUnivaluePath(root.left), longestUnivaluePath(root.right));
};

// 2.
var longestUnivaluePath = function(root) {
  let res = 0;

  // 返回root为根的最长同值路径
  function dfs(root) {
    if (root == null) {
      return 0;
    }

    let left = dfs(root.left);
    let right = dfs(root.right);

    let leftLongestPath = 0;
    let rightLongestPath = 0;
    if (root.left != null && root.left.val == root.val) {
      leftLongestPath = left + 1;
    }
    if (root.right != null && root.right.val == root.val) {
      rightLongestPath = right + 1;
    }

    res = Math.max(res, leftLongestPath + rightLongestPath);
    return Math.max(leftLongestPath, rightLongestPath);
  }

  dfs(root);
  return res;
}