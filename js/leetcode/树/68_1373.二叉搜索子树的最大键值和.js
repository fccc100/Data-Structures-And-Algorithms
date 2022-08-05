// 1373. 二叉搜索子树的最大键值和
// 给你一棵以 root 为根的 二叉树 ，请你返回 任意 二叉搜索子树的最大键值和。

// 二叉搜索树的定义如下：

// 任意节点的左子树中的键值都 小于 此节点的键值。
// 任意节点的右子树中的键值都 大于 此节点的键值。
// 任意节点的左子树和右子树都是二叉搜索树。
 
// 示例 1：

// 输入：root = [1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]
// 输出：20
// 解释：键值为 3 的子树是和最大的二叉搜索树。
// 示例 2：

// 输入：root = [4,3,null,1,2]
// 输出：2
// 解释：键值为 2 的单节点子树是和最大的二叉搜索树。
// 示例 3：

// 输入：root = [-4,-2,-5]
// 输出：0
// 解释：所有节点键值都为负数，和最大的二叉搜索树为空。
// 示例 4：

// 输入：root = [2,1,3]
// 输出：6
// 示例 5：

// 输入：root = [5,4,8,3,null,6,3]
// 输出：7

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
// 超时
var maxSumBST = function(root) {

  let res = -Infinity;
  function __maxSumBST(root) {
    if (root == null) {
      res = Math.max(res, 0);
      return;
    }
    
    if (isBstTree(root)) {
      res = Math.max(res, keyValSum(root));
    }
  
    __maxSumBST(root.left),
    __maxSumBST(root.right);
  }

  __maxSumBST(root);
  return res;
};

function isBstTree(root) {
  function __isBstTree(node, min, max) {
    if (node == null) {
      return true;
    }

    if (node.val <= min || node.val >= max) {
      return false;
    }

    return __isBstTree(node.left, min, node.val) && __isBstTree(node.right, node.val, max);
  }

  return __isBstTree(root, -Infinity, Infinity);
}

function keyValSum(root) {
  
  if (root == null) {
    return 0;
  }

  return keyValSum(root.left) + keyValSum(root.right) + root.val;
}

// 2.超时
var maxSumBST = function(root) {

  let res = -Infinity;
  function __maxSumBST(root) {
    if (root == null) {
      res = Math.max(res, 0);
      return;
    }
    
    if (isBstTree(root)) {
      res = Math.max(res, root.keyValSum);
    }
  
    __maxSumBST(root.left),
    __maxSumBST(root.right);
  }

  keyValSum(root);
  __maxSumBST(root);
  return res;
};

function isBstTree(root) {
  function __isBstTree(node, min, max) {
    if (node == null) {
      return true;
    }

    if (node.val <= min || node.val >= max) {
      return false;
    }
    
    return __isBstTree(node.left, min, node.val) && __isBstTree(node.right, node.val, max);
  }

  return __isBstTree(root, -Infinity, Infinity);
}

function keyValSum(root) {
  
  if (root == null) {
    return 0;
  }

  root.keyValSum = keyValSum(root.left) + keyValSum(root.right) + root.val;
  return root.keyValSum;
}