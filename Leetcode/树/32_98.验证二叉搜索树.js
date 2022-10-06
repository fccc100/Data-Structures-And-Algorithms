// 98. 验证二叉搜索树
// 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

// 有效 二叉搜索树定义如下：

// 节点的左子树只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。
 
// 示例 1：

// 输入：root = [2,1,3]
// 输出：true
// 示例 2：

// 输入：root = [5,1,4,null,null,3,6]
// 输出：false
// 解释：根节点的值是 5 ，但是右子节点的值是 4 。

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
var isValidBST = function(root) {
  function __isValidBST(node, min, max) {
    if (node == null) return true;
    if (node.val <= min || node.val >= max) {
      return false;
    }

    let isValidLeftBST = __isValidBST(node.left, min, node.val);
    let isValidRightBST = __isValidBST(node.right, node.val, max);

    return isValidLeftBST && isValidRightBST;
  }

  return __isValidBST(root, -Infinity, Infinity);
};

// 二叉搜索树的中序遍历一定是有序的,用这个性质来判断
var isValidBST = function(root) {
  let res = [];
  function inorder(node) {
    if (node == null) {
      return;
    }
    inorder(node.left);
    res.push(node.val);
    inorder(node.right);
  }

  inorder(root);
  for (let i = 1; i < res.length; i++) {
    if (res[i] <= res[i - 1]) {
      return false;
    }
  }
  return true;
}