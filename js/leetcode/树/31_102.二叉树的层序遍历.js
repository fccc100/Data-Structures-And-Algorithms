// 102. 二叉树的层序遍历
// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

// 示例 1：

// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]
// 示例 2：

// 输入：root = [1]
// 输出：[[1]]
// 示例 3：

// 输入：root = []
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root == null) return [];
  let queue = [];
  queue.push(root);

  let res = [];
  while(queue.length) {
    let len = queue.length;
    
    let curLevel = [];
    for (let i = 0; i < len; i++) {
      let curNode = queue.shift();
      curLevel.push(curNode.val);

      if (curNode.left) {
        queue.push(curNode.left);
      }
      if (curNode.right) {
        queue.push(curNode.right);
      }
    }
    res.push(curLevel);
  }
  return res;
};