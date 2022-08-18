// 958. 二叉树的完全性检验
// 给定一个二叉树的 root ，确定它是否是一个 完全二叉树 。

// 在一个 完全二叉树 中，除了最后一个关卡外，所有关卡都是完全被填满的，并且最后一个关卡中的所有节点都是尽可能靠左的。它可以包含 1 到 2h 节点之间的最后一级 h 。

// 示例 1：

// 输入：root = [1,2,3,4,5,6]
// 输出：true
// 解释：最后一层前的每一层都是满的（即，结点值为 {1} 和 {2,3} 的两层），且最后一层中的所有结点（{4,5,6}）都尽可能地向左。
// 示例 2：

// 输入：root = [1,2,3,4,5,null,7]
// 输出：false
// 解释：值为 7 的结点没有尽可能靠向左侧。

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
var isCompleteTree = function(root) {

  if (root == null) return true;

  let ids = [];

  function dfs(root, id) {
    if (root == null) {
      return;
    }

    ids.push(id);

    dfs(root.left, id * 2 + 1);
    dfs(root.right, id * 2 + 2);
  }
  
  dfs(root, 0);

  ids.sort((a, b) => a - b);
  for (let i = 0; i < ids.length; i++) {
    if (ids[i] != i) {
      return false;
    }
  }

  return true;
};