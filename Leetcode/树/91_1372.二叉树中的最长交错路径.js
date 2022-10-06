// 1372. 二叉树中的最长交错路径
// 给你一棵以 root 为根的二叉树，二叉树中的交错路径定义如下：

// 选择二叉树中 任意 节点和一个方向（左或者右）。
// 如果前进方向为右，那么移动到当前节点的的右子节点，否则移动到它的左子节点。
// 改变前进方向：左变右或者右变左。
// 重复第二步和第三步，直到你在树中无法继续移动。
// 交错路径的长度定义为：访问过的节点数目 - 1（单个节点的路径长度为 0 ）。

// 请你返回给定树中最长 交错路径 的长度。

// 示例 1：

// 输入：root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1]
// 输出：3
// 解释：蓝色节点为树中最长交错路径（右 -> 左 -> 右）。
// 示例 2：

// 输入：root = [1,1,1,null,1,null,null,1,1,null,1]
// 输出：4
// 解释：蓝色节点为树中最长交错路径（左 -> 右 -> 左 -> 右）。
// 示例 3：

// 输入：root = [1]
// 输出：0

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
// 1.超时
var longestZigZag = function (root) {
  if (root == null) {
    return 0;
  }

  function dfs(root, dir) {
    if (root == null) {
      return 0;
    }

    if (dir == 'l') {
      return dfs(root.right, 'r') + 1;
    } else {
      return dfs(root.left, 'l') + 1;
    }
  }

  let left = dfs(root.left, 'l');
  let right = dfs(root.right, 'r');

  return Math.max(left, right, longestZigZag(root.left), longestZigZag(root.right));
};

// 2.
var longestZigZag = function (root) {
  let max = 0;

  function dfs(root, left, right) {
    if (root == null) {
      return;
    }

    max = Math.max(max, left, right);
    dfs(root.left, right + 1, 0);
    dfs(root.right, 0, left + 1);
  }

  dfs(root, 0, 0);
  return max;
}