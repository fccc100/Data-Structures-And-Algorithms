// 剑指 Offer 34. 二叉树中和为某一值的路径
// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

// 叶子节点 是指没有子节点的节点。

// 示例 1：

// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// 输出：[[5,4,11,2],[5,8,4,5]]
// 示例 2：

// 输入：root = [1,2,3], targetSum = 5
// 输出：[]
// 示例 3：

// 输入：root = [1,2], targetSum = 0
// 输出：[]

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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, target) {
  let res = [];
  function dfs(node, target, path) {
    if (node == null) {
      return;
    }

    path.push(node.val);
    target -= node.val;
    if (node.left == null && node.right == null && target == 0) {
      res.push([...path]);
    }

    dfs(node.left, target, path);
    dfs(node.right, target, path);
    path.pop();
  }

  dfs(root, target, []);
  return res;
};