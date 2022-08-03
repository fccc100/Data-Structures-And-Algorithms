// 572. 另一棵树的子树
// 给你两棵二叉树 root 和 subRoot 。检验 root 中是否包含和 subRoot 具有相同结构和节点值的子树。如果存在，返回 true ；否则，返回 false 。

// 二叉树 tree 的一棵子树包括 tree 的某个节点和这个节点的所有后代节点。tree 也可以看做它自身的一棵子树。

// 示例 1：

// 输入：root = [3,4,5,1,2], subRoot = [4,1,2]
// 输出：true
// 示例 2：

// 输入：root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// 输出：false

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  if (root == null) {
    return false;
  }
  
  function isSameTree(root, subRoot) {
    if (root == null && subRoot == null) {
      return true;
    }
  
    if (root == null || subRoot == null) {
      return false;
    }
    
    if (root.val != subRoot.val) {
      return false;
    }

    return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right);
  }

  return isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

// [3,4,5,1,null,2]
// [3,1,2]

    //     3
    //   4   5
    // 1   2