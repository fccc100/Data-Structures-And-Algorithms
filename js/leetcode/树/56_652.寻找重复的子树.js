// 652. 寻找重复的子树
// 给定一棵二叉树 root，返回所有重复的子树。

// 对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。

// 如果两棵树具有相同的结构和相同的结点值，则它们是重复的。

// 示例 1：

// 输入：root = [1,2,3,4,null,2,4,null,null,4]
// 输出：[[2,4],[4]]
// 示例 2：

// 输入：root = [2,1,1]
// 输出：[[1]]
// 示例 3：

// 输入：root = [2,2,2,3,null,3,null]
// 输出：[[2,3],[3]]

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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {

  let res = [];
  let map = new Map();

  function find(node, str) {
    if (node == null) {
      return 'null';
    }

    let left = find(node.left, str);
    let right = find(node.right, str);
    str = node.val + ',' + left + ',' + right;
    if (map.get(str) == 1) {
      res.push(node);
    }
    map.set(str, map.has(str) ? map.get(str) + 1 : 1);
    return str;
  }

  find(root, '');
  return res;
};