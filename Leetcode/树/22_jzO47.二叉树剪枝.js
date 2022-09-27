// 剑指 Offer II 047. 二叉树剪枝
// 给定一个二叉树 根节点 root ，树的每个节点的值要么是 0，要么是 1。请剪除该二叉树中所有节点的值为 0 的子树。

// 节点 node 的子树为 node 本身，以及所有 node 的后代。

// 示例 1:

// 输入: [1,null,0,0,1]
// 输出: [1,null,0,null,1] 
// 解释: 
// 只有红色节点满足条件“所有不包含 1 的子树”。
// 右图为返回的答案。


// 示例 2:

// 输入: [1,0,1,0,0,0,1]
// 输出: [1,null,1,null,1]
// 解释: 


// 示例 3:

// 输入: [1,1,0,1,1,0,1,0]
// 输出: [1,1,0,1,1,null,1]
// 解释: 

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
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  // 删除node中和为0的子树，返回新树的根和以node为根的树的和sum
  function pruneTree(node) {
    if (node == null) {
      return [null, 0];
    }
    let left = pruneTree(node.left)
    let right = pruneTree(node.right)
    node.left = left[0];
    leftSum = left[1];
    node.right = right[0];
    rightSum = right[1];

    let curSum = leftSum + rightSum + node.val;
    if (curSum == 0) {
      return [null, curSum];
    } else {
      return [node, curSum];
    }
  }

  root = pruneTree(root)[0];
  return root;
};


// 后序遍历
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  if (root == null) {
    return root;
  }
  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);
  if (root.val == 0 && root.left == null && root.right == null) {
    root = null;
  }
  return root;
};